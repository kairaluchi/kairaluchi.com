import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import HeaderTop from './headerTop'
import HeaderUpper from './headerUpper'
import HeaderLower from './headerLower'
import HeaderBounce from './headerBounce'

const MainHeader = styled.div`
  position: relative;
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
  }
]

const Header = ({ siteTitle, path }) => {
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
      <HeaderTop siteTitle={siteTitle} />
      <HeaderUpper siteTitle={siteTitle} />
      <HeaderLower menu={menu} path={path} />
      <HeaderBounce
        showHeader={bounceHeaderVisibility}
        siteTitle={siteTitle}
        menu={menu}
        path={path}
      />
    </MainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Header
