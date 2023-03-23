import { Text } from "react-native";
import React, { FC } from "react";
import { Weight } from "../../constants/text";
import { COLORS } from "../../constants/colors";
import { useFonts } from "expo-font";

export enum TextAlign {
  center = "center",
  left = "left",
  right = "right",
}
export enum TextTransform {
  none = "none",
  lowercase = "lowercase",
  uppercase = "uppercase",
}

interface TextProps {
  children: any;
  size?: number | Weight;
  weight?: number | Weight;
  color?: COLORS;
  textAlign?: TextAlign;
  letterSpacing?: number;
  textTransform?: TextTransform;
  translucent?: 1 | 0.5;
  style?: any;
}

const MyText: FC<TextProps> = ({
  children,
  size = 13,
  weight = Weight.light,
  color = COLORS.complementary_dark_theme,
  textAlign = TextAlign.left,
  letterSpacing = 0.15 * Number(size),
  textTransform = TextTransform.none,
  translucent = 1,
  style,
}) => {
  const [loaded] = useFonts(
    weight == Weight.black
      ? {
          Montserrat_Black: require("../../../assets/fonts/Montserrat-Black.ttf"),
        }
      : weight == Weight.medium
      ? {
          Montserrat_Medium: require("../../../assets/fonts/Montserrat-Medium.ttf"),
        }
      : {
          Montserrat_Light: require("../../../assets/fonts/Montserrat-Light.ttf"),
        }
  );

  if (!loaded) {
    return null;
  }

  return (
    <Text
      style={[
        style,
        {
          fontSize: Number(size),
          opacity: translucent,
          color: color,
          textAlign: textAlign,
          letterSpacing: letterSpacing,
          textTransform: textTransform,
          fontFamily:
            weight == Weight.black
              ? "Montserrat_Black"
              : weight == Weight.medium
              ? "Montserrat_Medium"
              : "Montserrat_Light",
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default MyText;
