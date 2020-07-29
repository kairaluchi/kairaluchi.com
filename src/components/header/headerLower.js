import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Navigation, AutoContainer, NavbarCollapse, MainMenu } from './helper'

const LowerHeader = styled.div`
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  background: #3d3f43;
  z-index: 5;
  
  @media (max-width: 768px) {
     padding: 12px 0 12px 0;
  }
`

const NavOuter = styled.div`
  position: relative;
`

const ToggleButton = styled.button`
  border-color: rgba(255, 255, 255, 0.15) !important;
`

const GetBtn = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 200px;
  background: rgba(255, 255, 255, 0.15);

  &:hover {
    background: #247fe1;
  }
  
   @media (max-width: 768px) {
     height: 40px;
   }
`

const ApptBtn = styled(Link)`
  position: relative;
  display: block;
  line-height: 30px;
  text-align: center;
  padding: 15px 0px;
  font-family: "Lora", serif;
  font-weight: 700;
  font-size: 13px;
  color: #ffffff;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    padding: 5px 0px;
  }
   
  &:hover {
    color: #ffffff;
  }
`

const HeaderLower = ({ menu }) => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <LowerHeader className='header-lower'>
      <AutoContainer className='auto-container'>
        <NavOuter className='clearfix'>
          <MainMenu className="navbar navbar-expand-md navbar-light">
            <ToggleButton
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggle}
            >
              <span className="navbar-toggler-icon" />
            </ToggleButton>
            <NavbarCollapse className="collapse navbar-collapse" id="navbarSupportedContent" open={open}>
              <Navigation className='navbar-nav mr-auto'>
                {menu.map(({ name, link }) => (
                  <li key={name}>
                    <Link to={link} activeClassName='current' >
                      {name}
                    </Link>
                  </li>
                ))}
              </Navigation>
            </NavbarCollapse>
          </MainMenu>
          <GetBtn>
            <ApptBtn data-target='Contact Us' to='/contact'>
              Get An Appointment
            </ApptBtn>
          </GetBtn>
        </NavOuter>
      </AutoContainer>
    </LowerHeader>
  )
}

HeaderLower.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  )
}

export default HeaderLower
