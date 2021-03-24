export default {
  type: "object",
  name: "config",
  fields: [
    {
      type: "string",
      name: "type",
      options: {
        list: [
          {title: "Button", value: "btn"},
          {title: "Link", value: "link"},
        ]
      }
    },
    {
      type: "string",
      name: "size",
      options: {
        list: [
          {title: "Small", value: "sm"},
          {title: "Medium", value: "md"},
          {title: "Large", value: "large"},
          {title: "X-Large", value: "xl"},
        ]
      }
    },
    {
      type: "string",
      name: "font",
      options: {
        list: [
          {title: "Regular", value: "font-regular"},
          {title: "Medium", value: "font-medium"},
        ]
      }
    }
  ]
}
