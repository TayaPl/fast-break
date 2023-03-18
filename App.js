import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './app/navigation/RootNavigation'
import { AuthProvider } from './app/providers/AuthProvider';


export default function App() {
  return (
    <AuthProvider><NavigationContainer>
    <RootNavigation />
  </NavigationContainer></AuthProvider>
  );
}