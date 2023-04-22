import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";
import MyText from "./MyText";
import { AntDesign } from "@expo/vector-icons";
import { TEXT } from "../../constants/text";

interface CardProps {
  style?: any;
  heading: string;
  image?: string;
  grade?: number;
  like?: boolean;
  onPress?: () => void;
}

const Card: FC<CardProps> = ({
  style,
  heading,
  image,
  onPress,
  grade = 0,
  like = false,
}) => {
  return (
    <TouchableOpacity style={[style, styles.card]} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.img}></Image>
      <View style={styles.title}>
        <MyText
          style={{ flex: 5 }}
          size={TEXT.header3[0]}
          weight={TEXT.header3[1]}
          color={COLORS.complementary_dark_theme}
          letterSpacing={0.2 * Number(TEXT.header3[0])}
        >
          {heading}
        </MyText>
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              flex: 4,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <AntDesign
              name="star"
              size={25}
              color={COLORS.complementary_light_theme}
            />
            <MyText
              size={TEXT.header_small[0]}
              weight={TEXT.header_small[1]}
              color={COLORS.complementary_dark_theme}
              letterSpacing={0.2 * Number(TEXT.header_small[0])}
            >
              {grade}
            </MyText>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {like ? (
              <AntDesign
                name="heart"
                size={25}
                color={COLORS.complementary_light_theme}
              />
            ) : (
              <AntDesign
                name="hearto"
                size={25}
                color={COLORS.complementary_light_theme}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 318,
    height: 180,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.main_light_theme,
    shadowColor: COLORS.complementary_dark_theme,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    flex: 7,
    backgroundColor: COLORS.complementary_dark_theme,
  },
  title: {
    width: "100%",
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});

export default Card;
