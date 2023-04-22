import { useState, useMemo, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { Alert } from "react-native";

interface IRestaurants {
  _id: string;
  heading: string;
  dish: string;
  restaurant: Array<string>;
  raiting: number;
  like: Array<string>;
}
export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Array<IRestaurants>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const restaurant = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "restaurant"));
        querySnapshot.forEach((doc) => {
          setRestaurants((restaurants) => [
            ...restaurants,
            {
              _id: doc.id,
              heading: doc.data().heading,
              dish: doc.data().images.dishes[0],
              restaurant: doc.data().images.restaurant,
              raiting: doc.data().raitingAvg,
              like: doc.data().like,
            },
          ]);
        });
      } catch (error: any) {
        Alert.alert("Error logout: ", error.code);
      } finally {
        setIsLoading(false);
      }
    };
    restaurant();
  }, []);
  const value = useMemo(
    () => ({ restaurants, isLoading }),
    [restaurants, isLoading]
  );

  return value;
};
