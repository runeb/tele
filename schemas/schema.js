import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from "./documents/page"
import release from "./documents/release"
import hero from "./documents/hero"
import hero2 from "./documents/hero2"
import valueProp from "./documents/valueProp"

import cta from "./objects/cta"
import simpleRichText from "./objects/simpleRichText"
import config from "./objects/config"

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    config,
    hero,
    hero2,
    cta,
    simpleRichText,
    page,
    release,
    valueProp,
  ]),
})
