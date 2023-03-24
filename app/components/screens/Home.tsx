import { Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import Layout, { Views } from "../ui/Layout";
import { COLORS } from "../../constants/colors";
import TopNavigation from "../ui/TopNavigation";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <Layout
      view={Views.safeAreaView}
      style={{ backgroundColor: COLORS.complementary_light_theme }}
    >
      <TopNavigation onPress={() => {}} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  // button: {
  //   alignItems: "center",
  // },
});

export default Home;
