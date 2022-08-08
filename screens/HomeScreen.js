import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" bg-white pt-8">
      {/* Header */}
      <View className="flex-row pb-6 items-center space-x-2  px-4">
        <View>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>

        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now</Text>
          <View className="flex-row items-center">
            <View>
              <Text className="font-bold text-xl">Current Location</Text>
            </View>

            <View>
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
        </View>
        <View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 px-4">
        <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants & Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      {/* Content */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
