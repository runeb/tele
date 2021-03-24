import S from '@sanity/desk-tool/structure-builder'
import React from "react"

const MockPreview = (props) => {
  const {url} = props.options
  const style = {
    width: "100%"
  }
  const labelStyle = {
    marginLeft: "0.5em",
    paddingRight: "0.5em"
  }
  return (
    <div>
    <div style={{padding: "1em"}}>
    <label style={labelStyle} for="mode">Select preview:</label>
      <select id="mode">
        <option value="dsk">Desktop</option>
        <option value="tbl">Tablet</option>
        <option value="mbl">Mobile</option>
      </select>
    <label style={labelStyle} for="release">Select release:</label>
      <select id="release">
        <option value="a">2121a</option>
        <option value="b">2122b</option>
      </select>
    </div>
      <img style={style} src={url} />
    </div>
  )
}

export const getDefaultDocumentNode = ({schemaType}) => {
  if (schemaType === "hero" || schemaType === "page") {
    const screenshots = {
      hero: "/static/example.png",
      page: "/static/page.png"
    }
    const url = schemaType === "he"
    return S.document().views([
      S.view.form(),
      S.view.component(MockPreview)
      .options({
        url: screenshots[schemaType]
      })
      .title('Preview')
    ])
  }
    return S.document().views([ S.view.form()]) }

export default () =>
S.list()
  .title('Content')
  .items([
    ...S.documentTypeListItems()
  ])
    