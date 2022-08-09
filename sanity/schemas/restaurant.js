export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant Name",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image Of The Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude Of The Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude Of The Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter A Rating From [1-5] Stars",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please Enter The Value Between 1 & 5"),
    },
    {
      name: "type",
      type: "reference",
      title: "Category",
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
