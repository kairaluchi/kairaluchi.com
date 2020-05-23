import React from 'react'
import styled, { css } from 'styled-components'

const slideCss = css`
  height: 100%;
  width: ${props => props.width}px;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Foreground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.6;
`

const Slide = props => (
  <div css={slideCss} {...props}>
    <Foreground />
  </div>
)

export default Slide
