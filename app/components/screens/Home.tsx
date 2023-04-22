import { StyleSheet, Text } from "react-native";
import React, { FC, useState } from "react";
import Layout, { Views } from "../ui/Layout";
import { COLORS } from "../../constants/colors";
import TopNavigation, { topNavigationTypes } from "../ui/TopNavigation";
import Search from "../ui/Search";
import Settings from "../ui/Settings";
import Cards from "../ui/Cards";
import Sidebar from "../ui/Sidebar";
import PopUpButtons from "../ui/PopUpButtons";

interface HomeProps {
  navigation: any;
}

const Home: FC<HomeProps> = ({ navigation }) => {
  const [data, setData] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Layout view={Views.scrollView} style={styles.area}>
      <Layout view={Views.safeAreaView}>
        <Search
          val={data}
          onChange={(val) => setData(val)}
          textColor={COLORS.complementary_dark_theme}
          style={{ marginTop: 100 }}
          onPress={() => {
            console.log(data || null);
          }}
        />
        <Settings />
        <Cards navigation={navigation} />
        {sidebar ? <Sidebar /> : <></>}
        <TopNavigation
          type={sidebar ? topNavigationTypes.back : topNavigationTypes.baskets}
          onPress={() => setSidebar(!sidebar)}
        />
        <TopNavigation
          type={topNavigationTypes.profile}
          isLeftPosition={false}
          navigation={navigation}
        />
      </Layout>
      {/* <PopUpButtons
        text="Отменить блюдо?"
        visible={modalVisible}
        setVisible={setModalVisible}
      /> */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  area: {
    backgroundColor: COLORS.complementary_light_theme,
  },
});

export default Home;
