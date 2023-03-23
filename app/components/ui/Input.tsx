import { TextInput, StyleSheet } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

interface InputProps {
  children: string;
  style?: any;
  size: SIZES;
  long?: boolean;
  color?: COLORS;
  textColor?: COLORS;
  onChange: (val: string) => void;
  val: string;
  isSecure?: boolean;
}

const Input: FC<InputProps> = ({
  children,
  onChange,
  val,
  style,
  size,
  long = false,
  color = COLORS.complementary_light_theme,
  textColor = COLORS.complementary_dark_theme,
  isSecure = false,
}) => {
  return (
    <TextInput
      style={[
        style,
        {
          width: size,
          backgroundColor: color,
          height: long ? 144 : 48,
          color: textColor,
        },
        styles.input,
      ]}
      secureTextEntry={isSecure}
      onChangeText={onChange}
      value={val || ""}
      placeholder={children}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default Input;
