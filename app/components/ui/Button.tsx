import { StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";
import MyText, { TextAlign } from "./MyText";
import { TEXT, Weight } from "../../constants/text";
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
  size?: SIZES;
  color?: COLORS;
  textSize?: number | Weight;
  textWeight?: number | Weight;
  border?: boolean;
  clear?: boolean;
  translucentText?: 1 | 0.5;
  translucentButton?: boolean;
  textColor?: COLORS;
  disabled?: boolean;
  onPress?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  size = SIZES.medium,
  color = "",
  textSize = TEXT.text[0],
  textWeight = TEXT.text[0],
  border = false,
  clear = false,
  translucentText = 1,
  translucentButton = false,
  textColor = TextColor[color],
  onPress = () => {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        style,
        {
          width: size,
          height: clear ? Number(textSize) + 10 : 48,
          backgroundColor: clear
            ? ""
            : translucentButton
            ? color + "80"
            : color,
          borderColor: color,
          borderWidth: border ? 2 : 0,
          borderStyle: "solid",
        },
        styles.button,
      ]}
      onPress={onPress}
    >
      {
        <MyText
          size={textSize}
          weight={textWeight}
          color={textColor}
          translucent={translucentText}
          textAlign={TextAlign.center}
        >
          {children}
        </MyText>
      }
    </TouchableOpacity>
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
  },
});

export default Button;
