import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import { useFonts } from "expo-font";

export default function Login({ setIsReg }) {
  const [loaded] = useFonts({
    Nunito_Light: require("../../../assets/fonts/Nunito-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <TextInput style={styles.button} placeholder="Еmail"></TextInput>
      <TextInput style={styles.button} placeholder="Пароль"></TextInput>
      <Pressable style={styles.button_clear}>
        <Text
          style={{
            color: COLORS.complementary_dark_theme,
            fontFamily: "Nunito_Light",
          }}
        >
          забыли?
        </Text>
      </Pressable>
      <Pressable style={[styles.button, styles.button_accent]}>
        <Text
          style={{ color: COLORS.main_light_theme, fontFamily: "Nunito_Light" }}
        >
          Войти
        </Text>
      </Pressable>
      <Pressable
        style={styles.button_clear}
        onPress={() => {
          setIsReg(true);
        }}
      >
        <Text
          style={{
            color: COLORS.complementary_dark_theme,
            fontFamily: "Nunito_Light",
          }}
        >
          регистрация
        </Text>
      </Pressable>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
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
    marginBottom: 12.8,
    paddingLeft: 12.8,
  },
  button_accent: {
    backgroundColor: COLORS.accent_theme,
  },
  button_clear: {
    backgroundColor: "",
    opacity: 0.5,
  },
});
