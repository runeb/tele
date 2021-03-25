export default {
  type: "document",
  name: "release",
  initialValue: {
    isLive: false
  },
  fields: [
    {
      type: "string",
      name: "name"
    },
    {
      type: "slug",
      name: "tag"
    },
    {
      type: "datetime",
      name: "liveDate",
      description: "Set a specific date for this release to be live from"
    },
    {
      type: "boolean",
      name: "isLive",
      description: "Or manually set it to be live with this switch"
    }
  ],
  preview: {
    select: {
      title: "tag.current",
      date: "liveDate"
    },
    prepare({title, date}) {
      const subtitle = date ? `${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`: null
      return {
        title,
        subtitle
      }
    }
  }
}
