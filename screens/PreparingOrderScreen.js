import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(()=> {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 4000);
  }, [])
  return (
    <SafeAreaView className="flex-1 bg-[#00BBCC] justify-center items-center">
      <Animatable.Image
        source={require("../assets/chef-unscreen.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-72 w-72"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting For Restaurant To Prepare Your Order!
      </Animatable.Text>
      <Progress.CircleSnail indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
