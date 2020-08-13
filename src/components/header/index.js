import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import HeaderTop from './headerTop'
import HeaderUpper from './headerUpper'
import HeaderLower from './headerLower'
import HeaderBounce from './headerBounce'
import { useStateValue } from '../../hooks/context'

const MainHeader = styled.div`
  left: 0px;
  top: 0px;
  z-index: 999;
  width: 100%;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
`

const menu = [
  {
    name: 'Home',
    path: '',
    link: '/'
  },
  {
    name: 'Services',
    path: 'services',
    link: '/services'
  },
  {
    name: 'About Us',
    path: 'about',
    link: '/about'
  },
  {
    name: 'Contact Us',
    path: 'contact',
    link: '/contact'
  }
]

const Header = () => {
  const [{ siteTitle, siteData }] = useStateValue()
  const [bounceHeaderVisibility, setBounceHeaderVisibility] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const mainHeaderEl = useRef(null)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    const headerHeight = mainHeaderEl.current.clientHeight
    setBounceHeaderVisibility(scrollPosition >= headerHeight)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mainHeaderEl, scrollPosition])

  return (
    <MainHeader ref={mainHeaderEl}>
      <HeaderTop siteTitle={siteTitle} siteData={siteData} />
      <HeaderUpper siteTitle={siteTitle} siteData={siteData} />
      <HeaderLower menu={menu} />
      <HeaderBounce
        showHeader={bounceHeaderVisibility}
        siteTitle={siteTitle}
        menu={menu}
      />
    </MainHeader>
  )
}

export default Header
