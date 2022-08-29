import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { selectRestaurant } from "../features/restaurantSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector((state) => state.restaurant.restaurant);
  const basketItems = useSelector((state) => state.basket.items);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = basketItems.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [basketItems]);
  //console.log(groupedItemsInBasket);
  console.log(restaurant.title);
  return (
    <SafeAreaView>
      <View>
        <View>
          <View>
            <Text className="text-center font-bold text-lg">Basket</Text>
            <Text className="text-center">{restaurant.title}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
