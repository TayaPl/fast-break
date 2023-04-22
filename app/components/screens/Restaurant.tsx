import { StyleSheet } from "react-native";
import React, { FC } from "react";
import Layout, { Views } from "../ui/Layout";
import TopNavigation, { topNavigationTypes } from "../ui/TopNavigation";
import { COLORS } from "../../constants/colors";

interface RestaurantProps {
  navigation: any;
}

const Restaurant: FC<RestaurantProps> = ({ navigation }) => {
  return (
    <Layout view={Views.scrollView} style={styles.area}>
      <Layout view={Views.safeAreaView}>
        <TopNavigation
          isDarkTheme={true}
          type={topNavigationTypes.profile}
          isLeftPosition={false}
          navigation={navigation}
        />
        <TopNavigation
          isDarkTheme={true}
          type={topNavigationTypes.back}
          navigation={navigation}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  area: {
    backgroundColor: COLORS.main_dark_theme,
  },
});

export default Restaurant;
