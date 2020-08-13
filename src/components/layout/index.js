import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../header'
import Footer from '../footer'
import { StateProvider, useStateValue } from '../../hooks/context'
import { reducer } from '../../hooks/reducer'

const PageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-width: 300px;
  background-color: #${({ bg }) => bg || 'fff' }
`

const AutoContainer = styled.div`
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
`

const PageSection = styled.section`
  position: relative;
  padding: 120px 0px;
  color: #ffffff;
  background-color: #3d3f43;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  background-image: url(${props => props.bgImage});

  &:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(61, 63, 63, 0.85);
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 70px;
  }
`

const PageHeader = ({ page }) => {
  const [{ defaultImage }] = useStateValue()
  return (
    <PageSection bgImage={defaultImage}>
      <AutoContainer>
        <h1>{page}</h1>
      </AutoContainer>
    </PageSection>
  )
}

const Layout = ({ children, page, bg }) => {
  return (
    <StateProvider reducer={reducer}>
      <PageWrapper bg={bg}>
        <Header />
        <>
          {page && <PageHeader page={page} />}
          {children}
        </>
        <Footer />
      </PageWrapper>
    </StateProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
