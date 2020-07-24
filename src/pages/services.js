import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Accordion from '../components/accordion'

const data = [
  {
    page: 'Software Engineering',
    content: `
    <p>Adaptability is essential for navigating today’s dynamic and constantly changing world. This also means your software must be able to adapt to your constantly developing business.</p>
    <p>Our skilled and talented team will work with you to understand your needs, challenges and vision to ensure the best solution is implemented which is tailored to your Company.</p>
    <p>Kaira Luchi customizes a Software Development Life Cycle (SDLC) and effective Project Management methodologies such as Agile, in order to achieve the needs of our customer.</p>
    <h3>Capabilities</h3>
    <p>Our services covers the following from development to data management, quality engineering and more.</p>
    <h4>Custom Software engineering</h4>
    <p>Kaira Luchi listens to the needs of your business to provide a range of custom software engineering services which matches your vision. These include the following:</p>
    <ul>
        <li>Development consulting</li>
        <li>Architecture design</li>
        <li>Custom Web Application Development</li>
        <li>Custom Mobile Application Development</li>
        <li>Custom Database Development</li>
        <li>User Experience and Design</li>
    </ul>
    `
  },
  {
    page: 'DevOps and Automation',
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
