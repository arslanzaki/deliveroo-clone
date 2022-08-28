import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketTotal } from "../features/basketSlice";

const BasketIcon = () => {
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity className="bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1 mx-6">
        <Text className="text-white text-lg font-extrabold bg-[#01A296] py-1 px-2">{basketItems.length}</Text>
        <Text className="text-white text-lg text-center flex-1 font-extrabold">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">Rs. {basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
