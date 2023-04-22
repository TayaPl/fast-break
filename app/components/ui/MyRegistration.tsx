import { StyleSheet } from "react-native";
import React, { FC, useState } from "react";
import { COLORS } from "../../constants/colors";
import Input from "./Input";
import { SIZES } from "../../constants/sizes";
import { TEXT } from "../../constants/text";
import Button from "./Button";
import { useAuth } from "../../hooks/useAuth";
import CheckBox from "./CheckBox";

interface iData {
  name?: string;
  email: string;
  password: string;
}

const MyRegistration: FC = ({}) => {
  const { loginI, registerI } = useAuth();

  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<iData>({} as iData);
  const [isSelected, setSelection] = useState(false);

  const authHandler = async () => {
    const { name, email, password } = data;

    if (isReg) await registerI(name, email, password);
    else await loginI(email, password);

    setData({} as iData);
  };

  const isFilled =
    (isReg ? isSelected : true) &&
    data?.email != undefined &&
    data?.email != "" &&
    data?.password != undefined &&
    data?.password != "" &&
    (isReg ? data?.name != undefined && data?.name != "" : true);

  return (
    <>
      {isReg ? (
        <Input
          val={data.name}
          onChange={(val) => setData({ ...data, name: val })}
          style={styles.input}
          size={SIZES.large}
          placeholder={"Фио"}
          fill={true}
        />
      ) : (
        <></>
      )}
      <>
        <Input
          val={data.email}
          onChange={(val) => setData({ ...data, email: val })}
          style={styles.input}
          size={SIZES.large}
          placeholder={"Email"}
          fill={true}
        />
        <Input
          val={data.password}
          onChange={(val) => setData({ ...data, password: val })}
          style={styles.input}
          size={SIZES.large}
          isSecure={true}
          placeholder={"Пароль"}
          fill={true}
        />
        {isReg ? (
          <CheckBox isSelected={isSelected} setSelection={setSelection}>
            Согласен(на) на обработку персональных данных
          </CheckBox>
        ) : (
          <></>
        )}
        <Button
          style={styles.button}
          color={
            isFilled ? COLORS.accent_theme : COLORS.complementary_dark_theme
          }
          size={SIZES.medium}
          disabled={!isFilled}
          textSize={TEXT.text[0]}
          textWeight={TEXT.text[1]}
          onPress={isFilled ? authHandler : null}
        >
          {isReg ? "Зарегистрироваться" : "Войти"}
        </Button>
        <Button
          clear={true}
          textColor={COLORS.complementary_dark_theme}
          size={SIZES.medium}
          textSize={TEXT.text[0]}
          textWeight={TEXT.text[1]}
          translucentButton={true}
          onPress={() => {
            setIsReg(!isReg);
          }}
        >
          {isReg ? "вход" : "регистрация"}
        </Button>
      </>
    </>
  );
};

export default MyRegistration;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 25,
  },
});
