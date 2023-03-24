import React, { useRef } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Animated,
  Pressable,
} from "react-native";
import { COLORS } from "../../constants/colors";
import MyRegistration from "../ui/MyRegistration";
import { useAuth } from "../../hooks/useAuth";
import MyText, { TextTransform } from "../ui/MyText";
import { TEXT } from "../../constants/text";
import Loader from "../ui/Loader";
import Layout, { Views } from "../ui/Layout";

const Registration = () => {
  const imgAnim = useRef<any>(new Animated.Value(0)).current;
  const registrationAnim = useRef<any>(new Animated.Value(-70)).current;

  const { isLoading } = useAuth();

  const anim = () => {
    Animated.parallel([
      Animated.timing(imgAnim, {
        toValue: 50,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(registrationAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const inputRange = [0, 100];
  const outputRange = ["0%", "100%"];
  const animatedImg = imgAnim.interpolate({ inputRange, outputRange });
  const animatedRegistration = registrationAnim.interpolate({
    inputRange,
    outputRange,
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Pressable
        style={styles.pressableArea}
        onPress={() => {
          anim();
        }}
      >
        <Layout view={Views.safeAreaView}>
          <Animated.Image
            source={require("../../../assets/fast_break_еда.png")}
            style={[
              {
                top: animatedImg,
              },
              styles.img,
            ]}
          />
          <Layout>
            <MyText style={styles.title}>
              <MyText
                size={TEXT.header1[0]}
                weight={TEXT.header1[1]}
                color={COLORS.main_dark_theme}
                textTransform={TextTransform.uppercase}
                letterSpacing={0.2 * Number(TEXT.header1[0])}
              >
                Fast
              </MyText>
              <MyText
                size={TEXT.header1[0]}
                weight={TEXT.header1[1]}
                color={COLORS.accent_theme}
                textTransform={TextTransform.uppercase}
                letterSpacing={0.2 * Number(TEXT.header1[0])}
              >
                Break
              </MyText>
            </MyText>
            <MyText
              style={styles.subtitle}
              size={TEXT.text[0]}
              weight={TEXT.text[1]}
              color={COLORS.main_dark_theme}
              textTransform={TextTransform.lowercase}
            >
              Место для Тебя
            </MyText>
          </Layout>

          <Animated.View
            style={[
              {
                bottom: animatedRegistration,
              },
              styles.registration,
            ]}
          >
            {isLoading ? <Loader /> : <MyRegistration />}
          </Animated.View>
        </Layout>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  pressableArea: {
    flex: 1,
    backgroundColor: COLORS.complementary_light_theme,
  },
  img: {
    width: "110%",
    height: "100%",
    margin: "auto",
    position: "absolute",
    opacity: 0.5,
    resizeMode: "contain",
  },
  title: {
    marginTop: 60,
  },
  subtitle: {
    marginBottom: 20,
  },
  registration: {
    alignItems: "center",
    position: "absolute",
    height: "77%",
    width: "100%",
    backgroundColor: COLORS.main_light_theme,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    opacity: 0.9,
    paddingTop: 60,
  },
});

export default Registration;
