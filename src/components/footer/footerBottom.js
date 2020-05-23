import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AutoContainer } from './helper'

const BottomFooter = styled.div`
  position: relative;
  padding: 24px 0px;
  line-height: 22px;
  color: #b3b3b3;
  background: #181818;
  font-size: 13px;
  text-transform: uppercase;

  nav {
    position: relative;

    li {
      position: relative;
      float: left;
      margin-left: 25px;

      a {
        color: #b3b3b3;

        &:hover {
          color: #ffffff;
        }
      }
    }
  }
`

const FooterBottom = ({ menu }) => (
  <BottomFooter>
    <AutoContainer>
      <div className='row clearfix'>
        <div className='col-md-6 col-sm-6 col-xs-12'>
          <div className='copyright-text'>&copy; 2020 All Rights Reserved</div>
        </div>
        <div className='col-md-6 col-sm-6 col-xs-12'>
          <nav className='clearfix'>
            <ul className='pull-right clearfix'>
              {menu.map(({ name, link }) => (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </AutoContainer>
  </BottomFooter>
)

export default FooterBottom
