import React from 'react'
import styled from 'styled-components'
import FooterTop from './footerTop'
import FooterBottom from './footerBottom'
import { useStateValue } from '../../hooks/context'

const Wrapper = styled.div`
  position: relative;
  color: #9b9b9b;
  background: #272727;
`

const menu = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Services',
    link: '/services'
  },
  {
    name: 'About Us',
    link: '/about'
  },
  {
    name: 'Contact Us',
    link: '/contact'
  },
  {
    name: 'Privacy Policy',
    link: '/privacy'
  },
  {
    name: 'Terms & Condition',
    link: '/terms'
  }
]

const Footer = () => {
  const [{ siteData }] = useStateValue()

  return (
    <Wrapper className='main-footer'>
      <FooterTop menu={menu} siteData={siteData} />
      <FooterBottom menu={menu} />
    </Wrapper>
  )
}

export default Footer
