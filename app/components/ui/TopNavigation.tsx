import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";

interface TopNavigationProps {
  isLeftPosition?: boolean;
  isDarkTheme?: boolean;
  isFill?: boolean;
  onPress: () => void;
}

const TopNavigation: FC<TopNavigationProps> = ({
  isLeftPosition = true,
  isDarkTheme = false,
  isFill = false,
  onPress,
}) => {
  const color = isDarkTheme
    ? COLORS.complementary_light_theme
    : COLORS.complementary_dark_theme;
  const backgroundColor = isDarkTheme
    ? COLORS.main_dark_theme
    : COLORS.complementary_light_theme;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.topNavigation,
        {
          left: isLeftPosition ? -2 : "auto",
          right: isLeftPosition ? "auto" : -2,
          backgroundColor: isFill ? backgroundColor : "",
          borderColor: color,
        },
      ]}
    >
      <Text>Тык</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  topNavigation: {
    position: "absolute",
    top: -2,
    width: 40,
    height: 78,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 2,
    borderStyle: "solid",
  },
});

export default TopNavigation;
