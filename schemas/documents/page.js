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
      of: [
        {
          type: "reference",
          name: "valueRef",
          title: "Value proposition",
          to: {type: "valueProp"}
        },
        {
          type: "reference",
          name: "heroRef",
          title: "Hero",
          to: {type: "hero"}
        },
        {
          type: "reference",
          name: "hero_v2Ref",
          title: "Hero V2",
          to: {type: "hero_v2"}
        },
        {
          type: "object",
          title: "Hero releases",
          name: "heroComponentRelease",
          preview: {
            select: {
              versions: "components"
            },
            prepare({versions}) {
              return {
                title: `Hero`,
                subtitle: `${versions.length} version(s)`,
              }
            }
          },
          fields: [
            {
              type: "array",
              name: "components",
              of: [
                {
                  type: "object",
                  title: "Hero release",
                  name: "heroRelease",
                  fields: [
                    {
                      type: "reference",
                      name: "release",
                      to: { type: "release" },
                    },
                    {
                      type: "reference",
                      name: "hero",
                      to: [{ type: "hero" }, { type: "hero_v2" }],
                    },
                  ],
                  preview: {
                    select: {
                      title: "hero.name",
                      subtitle: "release.name",
                      isLive: "release.isLive",
                      liveDate: "release.liveDate",
                      media: "hero.background",
                    },
                    prepare({ title, subtitle, isLive, liveDate, media }) {
                      const live = isLive === true;
                      return {
                        title: `${title} - ${live ? "LIVE" : ""}`,
                        subtitle: `Release: ${subtitle}`,
                        media,
                      };
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
