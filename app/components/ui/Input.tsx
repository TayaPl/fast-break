import { TextInput, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";

export default function Input({ text }) {
  return <TextInput style={styles.input} placeholder={text}></TextInput>;
}
const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 48,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: COLORS.complementary_light_theme,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    color: COLORS.complementary_dark_theme,
    marginBottom: "0.8em",
    paddingLeft: "0.8em",
  },
});
