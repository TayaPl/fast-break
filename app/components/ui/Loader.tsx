import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/colors";

export default function Loader() {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator
        size="large"
        color={COLORS.accent_theme}
      ></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
