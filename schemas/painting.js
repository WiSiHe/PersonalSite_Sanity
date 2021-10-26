import { BsFillImageFill } from "react-icons/bs";

export default {
  name: "painting",
  title: "Painting",
  type: "document",
  icon: BsFillImageFill,
  fieldsets: [
    {
      name: "links",
      title: "Social Media links",
      options: { collapsible: true },
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.max(50).warning("Shorter titles are usually better"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",dwad
      options: {
        hotspot: true,
      },
    },
    {
      title: "Redbubble URL",
      name: "redbubbleUrl",
      type: "url",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
};
