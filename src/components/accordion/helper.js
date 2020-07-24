import styled from 'styled-components'
import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import React from "react";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`

export const ContentWrapper = styled.div``

export const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 30px;
`

const Widget = styled.div`
  background: #f3f3f3;
  padding: 30px;
  margin-top: 40px;
  text-align: center;

  h4 {
    font-size: 20px;
  }

  span {
    display: block;
    font-size: 20px;
    line-height: 2em;
  }

  ul {
    li {
      color: #247fe1;
      font-size: 18px;
      padding-top: 5px;
      padding-bottom: 5px;

      svg {
        margin-right: 5px;
        vertical-align: middle;
      }
    }
  }
`

export const ContactWidget = ({
  phone = '(443) 364-8515',
  email = 'info@kairaluchi.com'
}) => (
  <Widget>
    <h4>Have any Questions?</h4>
    <span>Contact Us:</span>
    <ul>
      <li>
        <RiPhoneLine />
        {phone}
      </li>
      <li>
        <RiMailLine />
        {email}
      </li>
    </ul>
  </Widget>
)
