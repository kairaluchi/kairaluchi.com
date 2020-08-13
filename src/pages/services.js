import React, { useRef } from "react";
import Layout from '../components/layout'
import Seo from '../components/seo'
import Accordion from '../components/accordion'

const data = [
  {
    page: 'Software Engineering',
    path: 'software-engineering',
    meta: 'Software Engineering Services',
    content: `
    <div>
      <p>Adaptability is essential for navigating today’s dynamic and constantly changing world. This also means your software must be able to adapt to your constantly developing business.</p>
      <p>Our skilled and talented team will work with you to understand your needs, challenges and vision to ensure the best solution is implemented, which is tailored to your Company.</p>
      <p>Kaira Luchi customizes a Software Development Life Cycle (SDLC) and effective Project Management methodologies such as Agile, in order to achieve the needs of our customer.</p>
    </div>
    
    <div>
      <h3>Capabilities</h3>
      <p>Our services cover the following, from development to data management, quality engineering and more.</p>
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
      <p>Kaira Luchi will transform your legacy applications to modern systems, to ensure agility and efficiency. Our modernization approach will enable you to get the most out of your existing solutions while reducing operating cost.</p>
    </div>
    
    <div>
        <h4>Application Maintenance</h4>
        <p>Our expert team provides site reliability engineering, thus ensuring sites are running at optimal functionality, providing functionality enhancement and fixing bugs as they arise.</p>
    </div>
    `
  },
  {
    page: 'DevOps and Automation',
    path: 'devops-and-automation',
    meta: 'Devops, Automation and Continuous Integration',
    content: `
    <div>
        <p>Application deployments have shifted from large-scale, project-based implementations to a continuous integration and delivery model.</p>
        <p>Kaira Luchi’s DevOps team makes this possible by bringing development, QA and operations teams together and applying automated processes to streamline continuous integration.</p>
        <p>The capability to roll out new and improved application features continuously, has become essential in today's digital world.</p>
    </div>
    <div>
      <h3>Capabilities</h3>
      <p>Our DevOps capabilities includes the following.</p>
      <ul>
        <li>Infrastructure Management</li>
        <li>Configuration Management</li>
        <li>Code Inspection & Continuous Integration</li>
        <li>Continuous Integration Testing</li>
        <li>Deployment and Automation</li>
      </ul>
    </div>
    `
  },
  {
    page: 'Continuous improvement',
    path: 'continuous-improvement',
    meta: 'Lean Six Sigma and Continuous improvement',
    content: `
      <p>Collaborating with Kaira Luchi is a unique experience, filled with passion, excellence and innovation.</p>   
      <p>Continuous improvement is at the heart of what we do. Continuous improvements of processes, businesses and people. If there’s an opportunity for improvement, there’s a place for Kaira Luchi.</p>
      <p>Kaira Luchi supports the ongoing improvement of processes, services and products through identification and implementation of incremental and breakthrough improvements.  We achieve this by using various project management methodologies such as Lean Six Sigma, PDCA and PMP approaches.</p>
      <p>Through facilitation of workshops i.e Kaizens, we support businesses through Lean Six Sigma's DMAIC approach, from defining the problem though implementation of solutions and project closure.</p>
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
    path: 'organizational-excellence',
    meta: 'Organizational Excellence',
    content: `
      <p>Achieving Organizational Excellence is coveted by all businesses, and Kaira Luchi can help propel your journey to excellence through supporting, implementation and/or training in:</p>
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

const meta = data.map(({ page, meta }) => ({ name: page, content: meta }))

const ServicesPage = props => {
  const servicesRef = useRef(null)

  return (
    <Layout page='Services' {...props} >
      <Seo title='Kaira Luchi Services' meta={meta} description='Kaira Luchi IT and Business process improvement Services' />
      <Accordion data={data} ref={servicesRef} />
    </Layout>
  )
}

export default ServicesPage
