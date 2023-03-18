import React from "react";
import { ActivityIndicator } from "react-native";
import { COLORS } from "../../constants/colors";

export default function Loader() {
  return (
    <ActivityIndicator
      size="large"
      color={COLORS.accent_theme}
    ></ActivityIndicator>
  );
}
