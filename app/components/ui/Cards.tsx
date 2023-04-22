import { StyleSheet } from "react-native";
import React, { FC } from "react";
import Card from "./Card";
import { useRestaurants } from "../../hooks/useRestaurants";
import Loader from "./Loader";

interface CardsProps {
  navigation: any;
}

const Cards: FC<CardsProps> = ({ navigation }) => {
  const { restaurants, isLoading } = useRestaurants();

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {restaurants?.map((card) => (
        <Card
          key={card._id}
          heading={card.heading}
          image={card.dish}
          style={{ marginBottom: 20 }}
          onPress={() => {
            navigation.navigate("Restaurant", {
              navigation: navigation,
            });
          }}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({});

export default Cards;
