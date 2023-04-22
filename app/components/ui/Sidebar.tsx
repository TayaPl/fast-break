import { StyleSheet } from "react-native";
import React, { FC } from "react";
import Layout, { Views } from "./Layout";
import { COLORS } from "../../constants/colors";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return <Layout style={styles.sidebar}></Layout>;
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.main_light_theme + "E6",
    height: "70%",
    width: 250,
    shadowColor: COLORS.complementary_dark_theme,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export default Sidebar;
