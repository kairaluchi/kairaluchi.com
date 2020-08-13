import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaRegEnvelope } from 'react-icons/fa'
import { AutoContainer } from './helper'

const Wrapper = styled.div`
  background: #ededed;
  color: #555555;
  font-family: "Lora", serif;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const TopHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    line-height: 24px;
    color: #555555;
    font-size: 14px;
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

const TopLeft = styled.div`
  padding: 10px 0px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const TopRight = styled.div`
  padding: 10px 0px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const HeaderTop = ({ siteTitle, siteData }) => {

  return (
    <Wrapper>
      <AutoContainer>
        <TopHeader>
          <TopLeft>
            <Link to='/'>
              {siteTitle} - Making businesses better, one solution at a time
            </Link>
          </TopLeft>
          <TopRight>
            <a href={`mailto:${siteData.email}`}>
              <FaRegEnvelope className='icon' />
              {` Email us at:  ${siteData.email}`}
            </a>
          </TopRight>
        </TopHeader>
      </AutoContainer>
    </Wrapper>
  )
}

HeaderTop.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default HeaderTop
