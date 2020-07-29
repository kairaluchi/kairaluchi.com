import React from 'react'
import styled, { css } from 'styled-components'

const slideDisplayCss = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  top: 10%;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 70%;
    height: 40%;
  }
`

const Tag = styled.h3`
  line-height: 1.5em;
  font-size: 20px;
  width: 230px;
  font-style: italic;
  font-weight: 550;
  padding-bottom: 10px;
  margin-bottom: 20px;

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    top: 100%;
    width: 60px;
    border-bottom: 2px solid #ffffff;
  }
`

const Title = styled.h1`
  line-height: 1.2em;
  font-size: 45px;
  font-weight: 700;
  width: 600px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    width: 400px;
  }
`

const Caption = styled.p`
  font-weight: 600;
  font-size: 20px;
`

const Display = ({ title, tag, caption }) => (
  <>
    <Tag>{tag}</Tag>
    <Title>{title}</Title>
    <Caption>{caption}</Caption>
  </>
)

const SlideDisplay = ({ activeSlide, displays = [] }) => (
  <div css={slideDisplayCss}>
    {displays.map(
      (display, i) =>
        activeSlide === i && <Display key={`key-${i}`} {...display} />
    )}
  </div>
)

export default SlideDisplay
