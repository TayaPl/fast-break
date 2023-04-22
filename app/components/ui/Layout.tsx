import { SafeAreaView, ScrollView, View } from "react-native";
import React, { FC } from "react";

export enum Views {
  scrollView,
  safeAreaView,
  baseView,
}

interface LayoutProps {
  children?: React.ReactNode;
  view?: Views;
  style?: any;
}

const Layout: FC<LayoutProps> = ({
  children,
  view = Views.baseView,
  style,
}) => {
  return (
    <>
      {view == Views.scrollView ? (
        <ScrollView style={[style, { flex: 1 }]}>{children}</ScrollView>
      ) : view == Views.safeAreaView ? (
        <SafeAreaView style={[style, { flex: 1, alignItems: "center" }]}>
          {children}
        </SafeAreaView>
      ) : (
        <View style={[style, { flex: 1, alignItems: "center" }]}>
          {children}
        </View>
      )}
    </>
  );
};

export default Layout;
