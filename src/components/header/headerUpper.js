import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { RiPhoneLine, RiMapPinLine, RiTimerLine } from 'react-icons/ri'
import logo from '../../images/logo.png'
import { AutoContainer } from './helper'

const UpperHeader = styled.div`
  padding: 30px 0px;
  background: #ffffff;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  z-index: 5;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;

  div {
    :nth-child(even) {
      margin-left: 20px;
      margin-right: 20px;

      @media (max-width: 576px) {
        margin-left: 0px;
        margin-right: 0px;
      }
    }
  }
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const UpperColumn = styled.div`
  display: flex;
  
  ul {
    margin-left: 8px;
  }
  
  @media (max-width: 576px) {
    // width: 50%;
    // float: left;
  }

  @media (max-width: 768px) {
    margin: auto;
  }

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
  color: #4a5c7a;
  font-size: 38px;
  margin: auto;

  @media (max-width: 576px) {
    font-size: 25px;
    display: none;
  }

  @media (max-width: 768px) {
    font-size: 38px;
  }

  @media (max-width: 992px) {
    font-size: 30px;
  }
`

const Logo = styled.div`
  line-height: 6px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
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
      <Wrapper>
        <Logo>
          <Link to='/'>
            <img width='220px' src={logo} alt={siteTitle} title={siteTitle} />
          </Link>
        </Logo>
        <Container>
          {columnBoxes.map(({ key, value, ...rest }) => (
            <UpperColumnBox key={key} value={siteData[value]} {...rest} />
          ))}
        </Container>
      </Wrapper>
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
