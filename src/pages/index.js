import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Slider from '../components/slider'

const IndexPage = props => (
  <Layout bg='aaa' {...props}>
    <Seo title='Home' />
    <Slider />
  </Layout>
)

export default IndexPage
