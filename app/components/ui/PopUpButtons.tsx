import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";
import PopUp from "./PopUp";
import Button from "./Button";
import MyText from "./MyText";
import { TEXT } from "../../constants/text";
import { SIZES } from "../../constants/sizes";

interface PopUpButtonsProps {
  text: string;
  subtitle?: string;
  subtitleAccent?: string;
  textButton1?: string;
  onPressButton1?: () => void;
  textButton2?: string;
  onPressButton2?: () => void;
  visible?: boolean;
  setVisible?: any;
}

const PopUpButtons: FC<PopUpButtonsProps> = ({
  text,
  subtitle,
  subtitleAccent,
  textButton1 = "да",
  onPressButton1,
  textButton2 = "нет",
  onPressButton2,
  visible = false,
  setVisible,
}) => {
  return (
    <PopUp visible={visible}>
      <MyText>{text}</MyText>
      <Text style={{ marginBottom: 15 }}>
        <MyText
          // style={styles.subtitle}
          size={TEXT.text[0]}
          weight={TEXT.text[1]}
          color={COLORS.complementary_dark_theme}
          translucent={0.5}
        >
          {subtitle}
        </MyText>
        <MyText
          size={TEXT.text_large[0]}
          weight={TEXT.text_large[1]}
          color={COLORS.accent_theme}
        >
          {subtitleAccent}
        </MyText>
      </Text>
      <Button
        style={styles.button}
        color={COLORS.accent_theme}
        size={SIZES.small}
        textSize={TEXT.text[0]}
        textWeight={TEXT.text[1]}
        onPress={() => {
          setVisible(!visible), onPressButton1;
        }}
      >
        {textButton1}
      </Button>
      <Button
        style={[styles.button, styles.buttonShadow]}
        color={COLORS.main_light_theme}
        size={SIZES.small}
        textSize={TEXT.text[0]}
        textWeight={TEXT.text[1]}
        onPress={() => {
          setVisible(!visible), onPressButton2();
        }}
      >
        {textButton2}
      </Button>
    </PopUp>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 5,
  },
  buttonShadow: {
    shadowColor: COLORS.complementary_dark_theme,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  popUp: {},
});

export default PopUpButtons;
