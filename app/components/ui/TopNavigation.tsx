import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export enum topNavigationTypes {
  back,
  basket,
  baskets,
  waiter,
  profile,
}

interface TopNavigationProps {
  isLeftPosition?: boolean;
  isAccentTheme?: boolean;
  isDarkTheme?: boolean;
  isFill?: boolean;
  type: topNavigationTypes;
  onPress?: () => void;
  navigation?: any;
  isLong?: boolean;
}

const TopNavigation: FC<TopNavigationProps> = ({
  isLeftPosition = true,
  isAccentTheme = false,
  isDarkTheme = false,
  isFill = false,
  isLong = true,
  type,
  onPress,
  navigation,
}) => {
  const color = isAccentTheme
    ? COLORS.accent_theme
    : isDarkTheme
    ? COLORS.complementary_light_theme
    : COLORS.complementary_dark_theme;
  const backgroundColor = isDarkTheme
    ? COLORS.main_dark_theme
    : COLORS.complementary_light_theme;
  const iconSize = isLong ? 30 : 25;
  return (
    <TouchableOpacity
      onPress={() => {
        type == topNavigationTypes.back
          ? onPress
            ? onPress()
            : navigation.goBack()
          : type == topNavigationTypes.baskets
          ? onPress()
          : type == topNavigationTypes.basket
          ? navigation.navigate("Basket")
          : type == topNavigationTypes.profile
          ? navigation.navigate("Profile")
          : console.log("вызов официанта"); //
      }}
      style={[
        styles.topNavigation,
        {
          left: isLeftPosition ? -2 : "auto",
          right: isLeftPosition ? "auto" : -2,
          backgroundColor: isFill ? backgroundColor : "",
          borderColor: color,
          height: isLong ? 78 : 40,
        },
      ]}
    >
      {type == topNavigationTypes.back ? (
        <AntDesign name="arrowup" size={iconSize} color={color} />
      ) : type == topNavigationTypes.basket ||
        type == topNavigationTypes.baskets ? (
        <SimpleLineIcons name="basket" size={iconSize} color={color} />
      ) : type == topNavigationTypes.profile ? (
        <FontAwesome name="user-o" size={iconSize} color={color} />
      ) : (
        <MaterialCommunityIcons
          name="hand-wave-outline"
          size={iconSize}
          color={color}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  topNavigation: {
    position: "absolute",
    top: -2,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 2,
    borderStyle: "solid",
  },
});

export default TopNavigation;
