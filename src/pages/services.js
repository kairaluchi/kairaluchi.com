import React from 'react'
import styled from 'styled-components'
import { RiPhoneLine, RiMailLine } from 'react-icons/ri'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Accordion from '../components/accordion'
import { AutoContainer } from '../components/common'

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

const Wrapper = styled.div`
  margin-bottom: 80px;
`

const Widget = styled.div`
  background: #f3f3f3;
  padding: 30px;
  margin-left: 15px;
  margin-right: -8px;
  text-align: center;
  
  h4 {
    font-size: 20px;
  }
  
  span {
    display: block;
    font-size: 20px;
    line-height: 2em;
  }
  
  ul {
    li {
      color: #247fe1;
      font-size: 18px;
      padding-top: 5px;
      padding-bottom: 5px;
      
      svg {
        margin-right: 5px;
        vertical-align: middle;
      }
    }
  }
`

const ContactUs = ({ phone = '(443) 364-8515', email = 'info@kairaluchi.com' }) => (
  <Wrapper>
    <AutoContainer>
      <div className='row'>
        <div className='col-xs-12 col-md-3'>
          <Widget>
            <h4>Have any Questions?</h4>
            <span>Contact Us:</span>
            <ul>
              <li><RiPhoneLine />{phone}</li>
              <li><RiMailLine />{email}</li>
            </ul>
          </Widget>
        </div>
      </div>
    </AutoContainer>
  </Wrapper>
)

const ServicesPage = props => (
  <Layout page='Services' {...props}>
    <Seo title='Services' />
    <Accordion data={data} />
    <ContactUs />
  </Layout>
)

export default ServicesPage
