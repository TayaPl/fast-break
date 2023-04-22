import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../components/screens/Registration";
import Home from "../components/screens/Home";
import Map from "../components/screens/Map";
import { useAuth } from "../hooks/useAuth";
import Restaurant from "../components/screens/Restaurant";
import Advice from "../components/screens/Advice";
import Profile from "../components/screens/Profile";

const RootStack = createNativeStackNavigator();

export default function RootNavigation() {
  const { user } = useAuth();

  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Map" component={Map} />
            <RootStack.Screen name="Restaurant" component={Restaurant} />
            <RootStack.Screen name="Advice" component={Advice} />
            <RootStack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <RootStack.Screen name="Registration" component={Registration} />
        )}
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
