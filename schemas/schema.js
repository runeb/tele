import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from "./documents/page"

import hero from "./objects/hero"
import cta from "./objects/cta"
import simpleRichText from "./objects/simpleRichText"


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    hero,
    cta,
    simpleRichText,
    page
  ]),
})
