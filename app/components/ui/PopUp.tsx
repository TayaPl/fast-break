import { Modal, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants/colors";

interface PopUpProps {
  children: React.ReactNode;
  visible?: boolean;
}

const PopUp: FC<PopUpProps> = ({ children, visible = false }) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.centerView}>
        <View style={styles.modal}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: "70%",
    width: "83%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.main_light_theme,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.complementary_dark_theme,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  centerView: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PopUp;
