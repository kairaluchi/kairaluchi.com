import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Navigation, AutoContainer, NavbarCollapse, MainMenu } from './helper'

const LowerHeader = styled.div`
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  background: #3d3f43;
  z-index: 5;
`

const NavOuter = styled.div`
  position: relative;
  padding-right: 200px;
`

const GetBtn = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 200px;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);

  &:hover {
    background: #247fe1;
  }
`

const ApptBtn = styled.a`
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

  &:hover {
    color: #ffffff;
  }
`

const HeaderLower = ({ menu, path }) => (
  <LowerHeader className='header-lower'>
    <AutoContainer className='auto-container'>
      <NavOuter className='clearfix'>
        <MainMenu>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='.navbar-collapse'
            >
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
          </div>

          <NavbarCollapse className='navbar-collapse collapse clearfix'>
            <Navigation className='clearfix'>
              {menu.map(({ name, link }) => (
                <li key={name} className={path === link ? 'current' : ''}>
                  <a href={link}>{name}</a>
                </li>
              ))}
            </Navigation>
          </NavbarCollapse>
        </MainMenu>

        <GetBtn>
          <ApptBtn href='/contact' className='theme-btn appt-btn'>
            Get An Appointment
          </ApptBtn>
        </GetBtn>
      </NavOuter>
    </AutoContainer>
  </LowerHeader>
)

HeaderLower.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  path: PropTypes.string.isRequired
}

export default HeaderLower
