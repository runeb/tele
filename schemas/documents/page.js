export default {
  type: "document",
  name: "page",
  fields: [
    {
      type: "slug",
      name: "slug"
    },
    {
      type: "array",
      name: "content",
      of: [
        {type: "hero"}
      ]
    }
  ]
}
