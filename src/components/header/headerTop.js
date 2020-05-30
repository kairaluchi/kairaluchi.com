import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaRegEnvelope } from 'react-icons/fa'
import { AutoContainer } from './helper'

const TopHeader = styled.div`
  position: relative;
  background: #ededed;
  color: #555555;
  z-index: 5;
  font-family: "Lora", serif;

  ul {
    li {
      a {
        position: relative;
        display: block;
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
    }
  }
`

const TopLeft = styled.div`
  position: relative;
  float: left;
  padding: 10px 0px;
`

const TopRight = styled.div`
  position: relative;
  float: right;
  padding: 10px 0px;
`

const HeaderTop = ({ siteTitle, siteData }) => (
  <TopHeader>
    <AutoContainer className='clearfix'>
      <TopLeft>
        <ul>
          <li>
            <Link to='/'>
              {siteTitle} - Making businesses better one solution at a time
            </Link>
          </li>
        </ul>
      </TopLeft>
      <TopRight>
        <ul>
          <li>
            <a href={`mailto:${siteData.email}`}>
              <FaRegEnvelope className='icon' />
              {` Email us at:  ${siteData.email}`}
            </a>
          </li>
        </ul>
      </TopRight>
    </AutoContainer>
  </TopHeader>
)

HeaderTop.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default HeaderTop
