import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import React, { FC } from "react";

export enum Views {
  scrollView,
  safeAreaView,
  baseView,
}

interface LayoutProps {
  children: React.ReactNode;
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
        <ScrollView style={[style, styles.container]}>{children}</ScrollView>
      ) : view == Views.safeAreaView ? (
        <SafeAreaView style={[style, styles.container]}>
          {children}
        </SafeAreaView>
      ) : (
        <View style={[style, styles.container]}>{children}</View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
