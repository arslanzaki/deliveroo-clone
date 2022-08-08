import React, { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-blue-700 font-bold text-3xl text-center mt-8">
        {/* Header */}
        <View>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
