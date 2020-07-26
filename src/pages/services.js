import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Accordion from '../components/accordion'

const data = [
  {
    page: 'Software Engineering',
    content: `
    <div>
      <p>Adaptability is essential for navigating today’s dynamic and constantly changing world. This also means your software must be able to adapt to your constantly developing business.</p>
      <p>Our skilled and talented team will work with you to understand your needs, challenges and vision to ensure the best solution is implemented which is tailored to your Company.</p>
      <p>Kaira Luchi customizes a Software Development Life Cycle (SDLC) and effective Project Management methodologies such as Agile, in order to achieve the needs of our customer.</p>
    </div>
    
    <div>
      <h3>Capabilities</h3>
      <p>Our services covers the following from development to data management, quality engineering and more.</p>
    </div>
    
    <div>
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
    </div>
    
    <div>
      <h4>Application modernization</h4>
      <p>Kaira Luchi will transform your legacy applications to modern systems, to ensure agility and efficiency.  Our modernization approach will enable you to get the most out of your existing solutions while reducing operating cost</p>
    </div>
    
    <div>
        <h4>Application Maintenance</h4>
        <p>Our expert team provides site reliability engineering, thus ensuring sites are running at optimal functionality, providing functionality enhancement and fixing bugs as they arise.</p>
    </div>
    `
  },
  {
    page: 'DevOps and Automation',
    content: `
    <p>We have a QA team working on every project. They ensure proper protection from the very first release and specialise in the latest automation tools, which allow them to keep testing time at a minimum cost. Functional, performance, regression or any other test – we will do it for you! We are also experienced in Continuous Delivery and Continuous Integration solutions.</p>
    `
  },
  {
    page: 'Continuous improvement',
    content: `
      <p>Collaborating with Kaira Luchi is a unique experience, filled with passion, excellence and innovation.</p>   
      <p>Continuous improvement is at the heart of what we do. Continuous improvements of processes, businesses and oneself. If there’s an opportunity for improvement, there’s a place for Kaira Luchi</p>
      <p>Kaira Luchi supports the ongoing improvement of processes, services and products through identification and implementation of incremental and breakthrough improvements.  We achieve this by using various Project management methodologies such as Lean Six Sigma, PDCA and PMP approaches.</p>
      <p>Through facilitation of workshops i.e Kaizens, we support businesses through Lean six sigma DMAIC approach, from defining the problem though implementation of solutions and project closure.</p>
      <p>Our talented experts are Certified PMP and Lean Six Sigma Black Belt professionals, thus giving us the flexibility to approach each project with your business in mind.  To ensure continuous improvement of your team / employees and to enhance your continuous improvement journey, we offer training and education services including, but not limited to:</p>
      <ul>
        <li>Lean Six Sigma White, Yellow, Green and Black Belt</li>
        <li>5S/6S</li>
        <li>Root Cause Investigation (Problem solving)</li>
        <li>Human Performance Improvement (Human Error Prevention)</li>
        <li>Project Management</li> 
      </ul>
    `
  },
  {
    page: 'Organizational Excellence',
    content: `
      <p>Achieving Organizational Excellence is coveted for all businesses, and Kaira Luchi can help propel your journey to excellence through supporting, implementation and/or training in:</p>
      <ul>
        <li>Strategic Plan Development and Deployment</li>
        <li>Change Management</li>
        <li>Human Performance Improvement (Human Error Prevention)</li>
        <li>Leadership</li>
        <li>PMO creation</li>
        <li>Remediation (inc. FDA Remediation efforts)</li>
      </ul>
    `
  }
]

const ServicesPage = props => (
  <Layout page='Services' {...props}>
    <Seo title='Services' />
    <Accordion data={data} />
  </Layout>
)

export default ServicesPage
