import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Accordion from '../components/accordion'

const data = [
  {
    page: 'Software Engineering',
    content: ''
  },
  {
    page: 'DevOps and Automation',
    content: ''
  },
  {
    page: 'Cloud Enablement',
    content: ''
  },
  {
    page: 'Continuous improvement',
    content: ''
  },
  {
    page: 'Organizational Excellence',
    content: ''
  }
]

const ServicesPage = props => (
  <Layout page='Services' {...props}>
    <Seo title='Services' />
    <Accordion data={data} />
  </Layout>
)

export default ServicesPage
