export default {
  type: "document",
  name: "hero",
  fieldsets: [
    {
      name: "config",
      title: "Configuration options",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
    },
  ],
  fields: [
    {
      type: "string",
      name: "name",
      description: "Descriptive internal name",
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
      type: "image",
      name: "background",
      options: {
        hotspot: true,
      },
    },
    {
      type: "cta",
      name: "cta",
    },
    {
      type: "config",
      name: "config",
      fieldset: "config",
    },
  ],
};
