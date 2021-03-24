import React from "react"

export default {
  type: "array",
  name: "simpleRichText",
  of: [
    {
      type: 'block',
      // Only allow these block styles
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'}
      ],
      // Only allow numbered lists
      lists: [
        {title: 'Numbered', value: 'number'}
      ],
      marks: {
        // Only allow these decorators
        decorators: [
          {title: 'Price', value: 'money', blockEditor: {
            icon: () => '$',
            render: props => (
              <span style={{ fontSize: '2rem' }}>{props.children}</span>
            )
          }},
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        // Support annotating text with a reference to an author
        annotations: [
        ]
      }
    }
  ]
}