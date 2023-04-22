import { StyleSheet, View } from "react-native";
import React, { FC } from "react";
import Layout, { Views } from "../ui/Layout";
import { COLORS } from "../../constants/colors";
import TopNavigation, { topNavigationTypes } from "../ui/TopNavigation";
import MyText, { TextAlign, TextTransform } from "../ui/MyText";
import { TEXT } from "../../constants/text";
import Button from "../ui/Button";
import { SIZES } from "../../constants/sizes";
import { useProfile } from "../../hooks/useProfile";
import Loader from "../ui/Loader";
import { useAuth } from "../../hooks/useAuth";

interface ProfileProps {
  navigation: any;
}

const Profile: FC<ProfileProps> = ({ navigation }) => {
  const { isLoading, name } = useProfile();
  const { logoutI, deliteI } = useAuth();

  return (
    <Layout view={Views.safeAreaView} style={[styles.area]}>
      <TopNavigation
        isDarkTheme={true}
        type={topNavigationTypes.back}
        navigation={navigation}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <View style={styles.container}>
            <MyText
              textTransform={TextTransform.uppercase}
              size={TEXT.header3[0]}
              weight={TEXT.header3[1]}
              color={COLORS.complementary_light_theme}
              textAlign={TextAlign.center}
            >
              {name}
            </MyText>
            <View style={styles.line} />
          </View>

          <View style={styles.container}>
            <Button
              style={styles.button}
              size={SIZES.large}
              color={COLORS.complementary_dark_theme}
            >
              Мои данные
            </Button>
            <Button
              style={styles.button}
              size={SIZES.large}
              color={COLORS.complementary_dark_theme}
            >
              История посещений
            </Button>
            <Button
              style={styles.button}
              size={SIZES.large}
              color={COLORS.complementary_dark_theme}
            >
              Мои карты
            </Button>
            <Button
              style={styles.button}
              size={SIZES.large}
              color={COLORS.complementary_dark_theme}
            >
              Избранное
            </Button>
          </View>

          <View style={styles.container}>
            <Button
              size={SIZES.small}
              color={COLORS.complementary_dark_theme}
              translucentButton={true}
              textColor={COLORS.complementary_dark_theme}
              onPress={logoutI}
            >
              Выйти
            </Button>
            <Button
              size={SIZES.small}
              textColor={COLORS.accent_theme}
              clear={true}
              onPress={deliteI}
            >
              Удалить
            </Button>
          </View>

          <View style={styles.container}>
            <Button
              size={SIZES.large}
              color={COLORS.complementary_dark_theme}
              translucentButton={true}
            >
              Связаться с снами
            </Button>
            <Button
              size={SIZES.large}
              textColor={COLORS.complementary_dark_theme}
              clear={true}
            >
              Ответы на вопросы
            </Button>
            <Button
              size={SIZES.large}
              textColor={COLORS.complementary_dark_theme}
              clear={true}
            >
              Политика конфиденциальности
            </Button>
          </View>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  area: {
    justifyContent: "center",
    backgroundColor: COLORS.main_dark_theme,
  },
  container: {
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  line: {
    backgroundColor: COLORS.complementary_dark_theme,
    height: 2,
    width: SIZES.large,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  button: {
    marginBottom: 15,
  },
});

export default Profile;
