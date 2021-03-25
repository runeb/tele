const pageComponents = [
  { type: "hero", title: "Hero" },
  { type: "hero_v2", title: "Hero V2" },
  { type: "valueProp", title: "Value proposition" },
];

const componentRelease = {
  type: "object",
  title: "Multi-release",
  name: "componentRelease",
  preview: {
    select: {
      versions: "versions",
    },
    prepare({ versions }) {
      return {
        title: "Multi-release",
        subtitle: `${versions.length} component(s)`,
      };
    },
  },
  fields: [
    {
      type: "array",
      name: "versions",
      of: [
        {
          type: "object",
          title: "Component",
          name: "component",
          fields: [
            {
              type: "reference",
              name: "component",
              to: pageComponents,
            },
            {
              type: "reference",
              name: "release",
              to: { type: "release" },
            },
          ],
          preview: {
            select: {
              title: "component.name",
              subtitle: "release.name",
              isLive: "release.isLive",
              liveDate: "release.liveDate",
            },
            prepare({ title, subtitle, isLive, liveDate }) {
              const live = isLive === true;
              return {
                title: `${title} - ${live ? "LIVE" : ""}`,
                subtitle: `Release: ${subtitle}`,
              };
            },
          },
        },
      ],
    },
  ],
};

export default {
  type: "document",
  name: "page",
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "slug",
      name: "slug",
      options: {
        source: "title",
      },
    },
    {
      type: "array",
      name: "content",
      of: [...pageComponents.map((c) => {
        return {
          type: "reference",
          name: `${c.type}Ref`,
          title: c.title,
          to: c,
        };
      }), componentRelease],
    },
  ],
};
