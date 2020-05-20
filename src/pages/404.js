import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AutoContainer = styled.div`
  position: static;
  max-width: 1200px;
  padding: 40px 15px;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 18px;
  }
`

const NotFoundPage = props => (
  <Layout page='Page Not Found!' {...props}>
    <Seo title='404: Not found' />
    <AutoContainer>
      <h1>NOT FOUND!</h1>
      <p>
        You just tried to access a resource that doesn&#39;t exist... the
        sadness.
      </p>
    </AutoContainer>
  </Layout>
)

export default NotFoundPage
