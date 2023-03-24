import { StyleSheet } from "react-native";
import React, { FC, useState } from "react";
import { COLORS } from "../../constants/colors";
import Input from "./Input";
import { SIZES } from "../../constants/sizes";
import { TEXT } from "../../constants/text";
import Button from "./Button";
import { useAuth } from "../../hooks/useAuth";

interface iData {
  name?: string;
  email: string;
  password: string;
}

const MyRegistration: FC = ({}) => {
  const { loginI, registerI } = useAuth();

  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<iData>({} as iData);

  const authHandler = async () => {
    const { name, email, password } = data;

    if (isReg) await registerI(name, email, password);
    else await loginI(email, password);

    setData({} as iData);
  };

  return (
    <>
      {isReg ? (
        <Input
          val={data.name}
          onChange={(val) => setData({ ...data, name: val })}
          style={styles.input}
          size={SIZES.large}
        >
          ФИО
        </Input>
      ) : null}
      <>
        <Input
          val={data.email}
          onChange={(val) => setData({ ...data, email: val })}
          style={styles.input}
          size={SIZES.large}
        >
          Еmail
        </Input>
        <Input
          val={data.password}
          onChange={(val) => setData({ ...data, password: val })}
          style={styles.input}
          size={SIZES.large}
          isSecure={true}
        >
          Пароль
        </Input>
        <Button
          style={styles.button}
          color={COLORS.accent_theme}
          size={SIZES.medium}
          textSize={TEXT.text[0]}
          textWeight={TEXT.text[1]}
          onPress={authHandler}
        >
          {isReg ? "Зарегистрироваться" : "Войти"}
        </Button>
        <Button
          clear={true}
          size={SIZES.medium}
          textSize={TEXT.text[0]}
          textWeight={TEXT.text[1]}
          translucentButton={0.5}
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
