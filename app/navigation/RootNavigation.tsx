import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Starting from "../components/screens/Starting";
import Home from "../components/screens/Home";
import { useAuth } from "../hooks/useAuth";

const RootStack = createNativeStackNavigator();

export default function RootNavigation() {
  const { user } = useAuth();

  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <RootStack.Screen name="Start" component={Starting} />
            <RootStack.Screen name="Home" component={Home} />
          </>
        ) : (
          <RootStack.Screen name="Start" component={Starting} />
        )}
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
