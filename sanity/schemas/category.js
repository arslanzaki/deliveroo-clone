export default {
  name: "category",
  title: "Menu Category",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Category Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image Of Category",
      type: "image",
    },
  ],
};
