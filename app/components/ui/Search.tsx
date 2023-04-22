import { StyleSheet, View } from "react-native";
import React, { FC, useState } from "react";
import Input from "./Input";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

interface SearchProps {
  fill?: boolean;
  color?: COLORS | string;
  textColor?: COLORS | string;
  style?: any;
  onPress: () => void;
  onChange: (val: string) => void;
  val: string;
}

const Search: FC<SearchProps> = ({
  fill,
  onChange,
  val,
  style,
  color = COLORS.complementary_light_theme,
  textColor = COLORS.complementary_dark_theme,
  onPress,
}) => {
  return (
    <View style={[style, { width: "100%", justifyContent: "center" }]}>
      {fill ? (
        <Input
          fill={true}
          val={val}
          onChange={onChange}
          style={styles.search}
          size={"100%"}
          placeholder={"Место, название, кухня, блюдо..."}
          color={color}
          textColor={textColor}
        />
      ) : (
        <LinearGradient
          colors={[textColor, "rgba(0, 0, 0, 0)"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.linnerGradient}
        >
          <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <Input
              val={val}
              onChange={onChange}
              size={"100%"}
              style={styles.search}
              placeholder={"Место, название, кухня, блюдо"}
            />
          </View>
        </LinearGradient>
      )}

      <AntDesign
        style={styles.svg}
        name="search1"
        size={25}
        color={textColor}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingLeft: 35,
    borderRadius: 15,
    right: 0,
    borderWidth: 2,
  },
  linnerGradient: {
    borderRadius: 15,
    left: 30,
    right: 0,
    height: 48,
    width: "100%",
  },
  innerContainer: {
    borderRadius: 13,
    flex: 1,
    margin: 2,
    justifyContent: "center",
    overflow: "hidden",
  },
  svg: {
    position: "absolute",
    left: 40,
  },
});

export default Search;
