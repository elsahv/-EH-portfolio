export default {
  name: "websites",
  title: "Websites",
  type: "document",
  fields: [
    {
      name: "Website title",
      title: "websiteTitle",
      type: "string",
    },

    // {
    //   name: "description",
    //   title: "Description",
    //   type: "string",
    // },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "websiteImg",
      title: "websiteImg",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "images",
    //   title: "Images",
    //   type: "array",
    //   of: [{ type: "skillImage" }],
    // },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    // {
    //   name: "tags",
    //   title: "Tags",
    //   type: "array",
    //   of: [
    //     {
    //       name: "tag",
    //       title: "Tag",
    //       type: "string",
    //     },
    //   ],
    // },
  ],
};
