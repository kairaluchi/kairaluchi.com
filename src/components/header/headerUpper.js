import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { RiPhoneLine, RiMapPinLine, RiTimerLine } from 'react-icons/ri'
import logo from '../../images/logo.png'
import { AutoContainer } from './helper'

const UpperHeader = styled.div`
  position: relative;
  padding: 12px 0px;
  background: #ffffff;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  z-index: 5;
`

const Container = styled.div`
  position: relative;
`

const UpperColumn = styled.div`
  position: relative;
  float: left;
  min-width: 80px;
  margin-left: 40px;
  padding-left: 50px;
  padding-top: 25px;
  a {
    color: #555555;
    transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;

    &:hover {
      color: #247fe1;
    }
  }
`

const IconBox = styled.div`
  position: absolute;
  left: 0px;
  top: 20px;
  width: 45px;
  line-height: 75px;
  color: #4a5c7a;
  font-size: 38px;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
`

const Logo = styled.div`
  line-height: 6;
`

const columnBoxes = [
  {
    key: 'contact-us',
    name: 'Contact Us',
    value: 'phone',
    Icon: <RiPhoneLine />
  },
  {
    key: 'our-office',
    name: 'Office',
    value: 'address',
    Icon: <RiMapPinLine />
  },
  {
    key: 'working-hours',
    name: 'Working Hours',
    value: 'workingHours',
    Icon: <RiTimerLine />
  }
]

const UpperColumnBox = ({ name, value, Icon }) => (
  <UpperColumn>
    <IconBox>{Icon}</IconBox>
    <ul>
      <li>
        <strong>{name}</strong>
      </li>
      <li>{value}</li>
    </ul>
  </UpperColumn>
)

const HeaderUpper = ({ siteTitle, siteData }) => (
  <UpperHeader>
    <AutoContainer>
      <div className='clearfix'>
        <Logo className='pull-left'>
          <Link to='/'>
            <img width='220px' src={logo} alt={siteTitle} title={siteTitle} />
          </Link>
        </Logo>
        <Container className='pull-right'>
          {columnBoxes.map(({ key, value, ...rest }) => (
            <UpperColumnBox key={key} value={siteData[value]} {...rest} />
          ))}
        </Container>
      </div>
    </AutoContainer>
  </UpperHeader>
)

UpperColumnBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.node.isRequired
}

HeaderUpper.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default HeaderUpper
