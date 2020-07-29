import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import logo from '../../images/logo.png'
import { Navigation, AutoContainer, NavbarCollapse, MainMenu } from './helper'

const headerAnimation = css`
  -ms-animation-name: fadeInDown;
  -moz-animation-name: fadeInDown;
  -op-animation-name: fadeInDown;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -ms-animation-duration: 500ms;
  -moz-animation-duration: 500ms;
  -op-animation-duration: 500ms;
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
  -ms-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -op-animation-timing-function: linear;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -ms-animation-iteration-count: 1;
  -moz-animation-iteration-count: 1;
  -op-animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
`

const BounceHeader = styled.div`
  position: fixed;
  opacity: ${({ showHeader }) => (showHeader ? 1 : 0)};
  visibility: ${({ showHeader }) => (showHeader ? 'visible' : 'hidden')};
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 0px 0px;
  background: #ffffff;
  z-index: ${({ showHeader }) => (showHeader ? 999 : 0)};
  border-bottom: 1px solid #cccccc;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  ${({ showHeader }) => (showHeader ? headerAnimation : '')}

  @media (max-width: 768px) {
    padding: 5px 0 5px 0;
  }
`

const Logo = styled.div`
  padding: 9px 0px 2px;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const MenuToggle = styled.button`
  @media (max-width: 768px) {
    margin-left: 100px;
  }
`

const HeaderBounce = ({ showHeader, siteTitle, menu }) => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <BounceHeader showHeader={showHeader}>
      <AutoContainer className='clearfix'>
        <Wrapper>
          <Logo>
            <Link to='/' className='img-responsive'>
              <img width='160px' src={logo} alt={siteTitle} title={siteTitle} />
            </Link>
          </Logo>
          <div>
            <MainMenu
              className='navbar navbar-expand-md navbar-light'
              isBounceMenu
            >
              <MenuToggle
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={toggle}
              >
                <span className='navbar-toggler-icon' />
              </MenuToggle>
              <NavbarCollapse
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
                open={open}
              >
                <Navigation contrast className='navbar-nav mr-auto'>
                  {menu.map(({ name, link }) => (
                    <li key={name}>
                      <Link to={link} activeClassName='current'>
                        {name}
                      </Link>
                    </li>
                  ))}
                </Navigation>
              </NavbarCollapse>
            </MainMenu>
          </div>
        </Wrapper>
      </AutoContainer>
    </BounceHeader>
  )
}

HeaderBounce.propTypes = {
  showHeader: PropTypes.bool.isRequired,
  siteTitle: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  )
}

export default HeaderBounce
