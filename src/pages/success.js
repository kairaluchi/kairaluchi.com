import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { AutoContainer } from "../components/common";

const Message = styled.div`
  padding: 60px 0 60px;
  text-align: center;
  font-size: 2em;
`

const SuccessPage = props => (
  <Layout page='Message Successfully Sent' {...props}>
    <Seo title='Contact Us' />
    <AutoContainer>
      <Message>
        <p>Thanks for submitting your message, we will get back to you ASAP!</p>
      </Message>
    </AutoContainer>
  </Layout>
)

export default SuccessPage
