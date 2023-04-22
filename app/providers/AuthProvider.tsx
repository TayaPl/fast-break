import { deleteUser, onAuthStateChanged, User } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { auth, db, login, logout, register } from "../config/firebase";
import { doc, deleteDoc } from "firebase/firestore";

interface iContext {
  user: User | null;
  isLoading: boolean;
  registerI: (name: string, email: string, password: string) => Promise<void>;
  loginI: (email: string, password: string) => Promise<void>;
  logoutI: () => Promise<void>;
  deliteI: () => Promise<void>;
}

export const AuthContext = createContext<iContext>({} as iContext);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (
    name: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    try {
      const { user } = await register(email, password);
      await addDoc(collection(db, "users"), {
        _id: user.uid,
        displayName: name,
      });
    } catch (error: any) {
      Alert.alert("Ошибшка регистрации: " + error.code);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert("Ошибшка входа: " + error.code);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error: any) {
      Alert.alert("Error logout: ", error.code);
    } finally {
      setIsLoading(false);
    }
  };

  const deliteHandler = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("_id", "==", user?.uid))
      );
      deleteUser(user).then(() => {
        querySnapshot.forEach((d) => {
          deleteDoc(doc(db, "users", d.id));
        });
      });
    } catch (error: any) {
      Alert.alert("Error logout: ", error.code);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setUser(user || null);
        setIsLoadingInitial(false);
      }),
    []
  );

  const value = useMemo(
    () => ({
      user,
      isLoading,
      loginI: loginHandler,
      logoutI: logoutHandler,
      registerI: registerHandler,
      deliteI: deliteHandler,
    }),
    [user, isLoading]
  );
  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
