import { Pressable, StyleSheet } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";
import MyText, { TextAlign } from "./MyText";
import { Weight } from "../../constants/text";
import { SIZES } from "../../constants/sizes";

const TextColor = {
  "#F9F5EA": COLORS.complementary_dark_theme,
  "#ECE7DC": COLORS.complementary_dark_theme,
  "#241A19": COLORS.complementary_light_theme,
  "#92897F": COLORS.main_light_theme,
  "#F59701": COLORS.main_light_theme,
};

interface ButtonProps {
  children: string;
  style?: any;
  size: SIZES;
  color?: COLORS;
  textSize: number | Weight;
  textWeight: number | Weight;
  border?: boolean;
  clear?: boolean;
  translucentText?: 1 | 0.5;
  translucentButton?: 1 | 0.5;
  textColor?: COLORS;
  onPress?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  size,
  color = "",
  textSize,
  textWeight,
  border = false,
  clear = false,
  translucentText = 1,
  translucentButton = 1,
  textColor = TextColor[color],
  onPress = () => {},
}) => {
  return (
    <Pressable
      style={[
        style,
        {
          width: size,
          backgroundColor: clear ? "" : color,
          borderColor: color,
          borderWidth: border ? 2 : 0,
          borderStyle: "solid",
          opacity: translucentButton,
        },
        styles.button,
      ]}
      onPress={onPress}
    >
      {
        <MyText
          size={textSize}
          weight={textWeight}
          color={clear ? COLORS.complementary_dark_theme : textColor}
          translucent={translucentButton ? 1 : translucentText}
          textAlign={TextAlign.center}
        >
          {children}
        </MyText>
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 48,
  },
});

export default Button;
