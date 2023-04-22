import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.setting}>
        <AntDesign
          name="swap"
          size={30}
          color={COLORS.complementary_light_theme}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.setting}>
        <Feather
          name="map-pin"
          size={30}
          color={COLORS.complementary_light_theme}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.setting}>
        <AntDesign
          name="hearto"
          size={30}
          color={COLORS.complementary_light_theme}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: 20,
    width: 210,
  },
  setting: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.main_light_theme,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default Settings;
