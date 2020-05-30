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

const message = {
  subscribe: 'Thanks for subscribing to our newsletter',
  contact: 'Thanks for submitting your message, we will get back to you ASAP!'
}

const page = {
  subscribe: 'Successfully Subscribed',
  contact: 'Message Successfully Sent'
}

const displayMessage = (form, data, defaultMessage) => data[form] || defaultMessage

const SuccessPage = props => {
  const { location: { search } } = props
  const [, form] = search.split('=')
  const defaultTitle = 'Message Successfully Sent'
  const defaultMessage = 'Thanks for sending us your message'

  return (
    <Layout page={displayMessage(form, page, defaultTitle)} {...props}>
      <Seo title='Contact Us' />
      <AutoContainer>
        <Message>
          <p>{displayMessage(form, message, defaultMessage)}</p>
        </Message>
      </AutoContainer>
    </Layout>
  )
}

export default SuccessPage
