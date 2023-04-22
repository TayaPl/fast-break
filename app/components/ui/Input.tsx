import { TextInput, StyleSheet } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

interface InputProps {
  placeholder: string;
  style?: any;
  size: SIZES | string;
  long?: boolean;
  color?: COLORS | string;
  textColor?: COLORS | string;
  onChange: (val: string) => void;
  val: string;
  isSecure?: boolean;
  fill?: boolean;
  gradient?: boolean;
}

const Input: FC<InputProps> = ({
  placeholder,
  onChange,
  val,
  style,
  size,
  fill = false,
  long = false,
  color = COLORS.complementary_light_theme,
  textColor = COLORS.complementary_dark_theme,
  isSecure = false,
}) => {
  return (
    <TextInput
      style={[
        styles.input,
        style,
        {
          width: size,
          backgroundColor: fill ? color : "rgba(0, 0, 0, 0)",
          borderColor: color,
          height: long ? 144 : 48,
          color: textColor,
        },
      ]}
      secureTextEntry={isSecure}
      onChangeText={onChange}
      value={val || ""}
      placeholder={placeholder}
    />
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
