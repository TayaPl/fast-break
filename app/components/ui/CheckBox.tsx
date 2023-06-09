import { StyleSheet, View, Pressable } from "react-native";
import React, { useState, FC } from "react";
import { COLORS } from "../../constants/colors";
import MyText from "./MyText";
import { TEXT } from "../../constants/text";
import { SIZES } from "../../constants/sizes";

interface CheckBoxProps {
  children: string;
  style?: any;
  isSelected: boolean;
  setSelection: any;
}

const CheckBox: FC<CheckBoxProps> = ({
  children,
  style,
  isSelected,
  setSelection,
}) => {
  return (
    <View style={[style, styles.checkboxContainer]}>
      <Pressable
        onPress={() => {
          setSelection(!isSelected);
        }}
        style={[
          styles.checkbox,
          isSelected
            ? {
                backgroundColor: COLORS.accent_theme,
                borderColor: COLORS.accent_theme,
              }
            : {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: COLORS.complementary_light_theme,
              },
        ]}
      />
      <MyText
        style={styles.checkbox_label}
        size={TEXT.text_small[0]}
        weight={TEXT.text_small[1]}
        color={COLORS.complementary_dark_theme}
      >
        {children}
      </MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    width: SIZES.large,
    alignItems: "center",
  },
  checkbox: {
    borderWidth: 2,
    height: 28,
    width: 28,
    borderRadius: 10,
  },
  checkbox_label: {
    marginLeft: 8,
    color: COLORS.complementary_dark_theme,
  },
});

export default CheckBox;
