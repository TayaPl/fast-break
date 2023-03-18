import React, { useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Animated,
  TouchableHighlight,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { useFonts } from "expo-font";
import Login from "../ui/Login";
import SignUp from "../ui/SignUp";
import Loader from "../ui/Loader";
import { useAuth } from "../../hooks/useAuth";

const Starting = () => {
  const imgAnim = useRef<any>(new Animated.Value(0)).current;
  const registrationAnim = useRef<any>(new Animated.Value(-75)).current;

  const [loaded] = useFonts({
    Montserrat_Black: require("../../../assets/fonts/Montserrat-Black.ttf"),
    Nunito_Light: require("../../../assets/fonts/Nunito-Light.ttf"),
  });
  const [isReg, setIsReg] = useState(false);
  const { isLoading } = useAuth();

  if (!loaded) {
    return null;
  }
  const anim = () => {
    Animated.parallel([
      Animated.timing(imgAnim, {
        toValue: 90,
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
      <TouchableHighlight
        style={styles.area}
        onPress={() => {
          anim();
        }}
      >
        <SafeAreaView style={styles.container}>
          <Animated.Image
            source={require("../../../assets/fast_break_еда.png")}
            style={[
              {
                top: animatedImg,
              },
              styles.img,
            ]}
          />
          <View style={styles.opacity}></View>
          <View style={styles.container}>
            <Text style={styles.title}>
              <Text style={styles.accent}>Fast</Text>
              <Text> Break</Text>
            </Text>
            <Text style={styles.subtitle}>Место для Тебя</Text>
          </View>
          <Animated.View
            style={[
              {
                bottom: animatedRegistration,
              },
              styles.registration,
            ]}
          >
            {isLoading ? (
              <Loader />
            ) : isReg ? (
              <SignUp setIsReg={setIsReg}></SignUp>
            ) : (
              <Login setIsReg={setIsReg}></Login>
            )}
          </Animated.View>
        </SafeAreaView>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0DACE",
  },
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    margin: "auto",
    position: "absolute",
  },
  img: {
    minWidth: "100%",
    minHeight: "100%",
    margin: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    // backgroundColor: COLORS.accent_theme,
  },
  opacity: {
    width: "100%",
    height: "100%",
    margin: "auto",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.main_light_theme,
    opacity: 0.5,
  },
  title: {
    fontFamily: "Montserrat_Black",
    fontSize: 36,
    fontWeight: "900",
    lineHeight: 44,
    letterSpacing: 3.2,
    textTransform: "uppercase",
    marginTop: 20,
    color: COLORS.main_dark_theme,
  },
  subtitle: {
    fontFamily: "Nunito_Light",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 18,
    letterSpacing: 3.2,
    textTransform: "lowercase",
    color: COLORS.main_dark_theme,
  },
  accent: {
    color: COLORS.accent_theme,
  },
  registration: {
    alignItems: "center",
    position: "absolute",
    height: "85%",
    width: "100%",
    backgroundColor: COLORS.main_light_theme,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    opacity: 0.9,
    overflow: "hidden",
    paddingTop: "25%",
  },
});

export default Starting;
