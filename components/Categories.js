import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import sanityClient,{ urlFor } from "../sanity";
import CategoryCard from "./CategoryCard";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {/* CategoryCard */}
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.title}
        />
      ))}
      
    </ScrollView>
  );
}

export default Categories;
