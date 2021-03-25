# Queries

Reduce page components down to flat array of specific release versions, sent in as parameters to the query.
- release (_id)
- default (fallback release _id)

```javascript
* [_type == "page"] {
  title,
  content[] {
    // Reach into any release configuration object and filter out the wanted
    // release,  fall back to default release if none found
    _type == "componentRelease" => coalesce(
      versions[release._ref == $release][0].component->,
      versions[release._ref == $default][0].component->,
      versions[0]
    ),
    // Automatically deference any root level component reference
    defined(_ref) => @->,
  }
}
```
