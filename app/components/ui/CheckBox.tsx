import { StyleSheet, View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/colors";

export default function CheckBox() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <Pressable
        onPress={() => {
          setSelection(!isSelected);
        }}
        style={[
          styles.checkbox,
          isSelected
            ? { backgroundColor: COLORS.accent_theme }
            : { backgroundColor: "" },
        ]}
      />
      <Text style={styles.label}>
        Согласен(на) на обработку персональных данных
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  checkbox: {
    borderColor: COLORS.complementary_light_theme,
    borderWidth: 2,
    height: 28,
    width: 28,
    borderRadius: 10,
  },
  label: {
    margin: 8,
    color: COLORS.complementary_dark_theme,
  },
});
