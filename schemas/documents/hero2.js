export default {
  type: "document",
  title: "Hero V2",
  name: "hero_v2",
  fields: [
    {
      type: "string",
      name: "name",
      description: "Descriptive internal name",
    },
    {
      type: "array",
      name: "carousel",
      of: [
        {type: "image", options: {hotspot: true}}
      ]
    },
    {
      type: "string",
      name: "eyebrow",
    },
    {
      type: "string",
      name: "headline",
    },
    {
      type: "simpleRichText",
      name: "body",
    },
    {
      type: "cta",
      name: "cta",
    },
  ],
  preview: {
    select: {
      title: "name",
      // title: "eyebrow",
      // subtitle: "headline",
      media: "carousel.0"
    }
  }
};
