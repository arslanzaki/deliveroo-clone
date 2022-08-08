import React from "react";
import { Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://image.cookly.me/tag_images/card/cookly-pizza-making-cooking-classes-thumbnail.jpeg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://image.cookly.me/tag_images/card/cookly-pizza-making-cooking-classes-thumbnail.jpeg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://image.cookly.me/tag_images/card/cookly-pizza-making-cooking-classes-thumbnail.jpeg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://image.cookly.me/tag_images/card/cookly-pizza-making-cooking-classes-thumbnail.jpeg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://image.cookly.me/tag_images/card/cookly-pizza-making-cooking-classes-thumbnail.jpeg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://image.cookly.me/tag_images/card/cookly-pizza-making-cooking-classes-thumbnail.jpeg"
        title="Testing"
      />
    </ScrollView>
  );
}

export default Categories;
