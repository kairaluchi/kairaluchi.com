import React from 'react'
import { css } from 'styled-components'

const sliderContentCss = css`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`

const SliderContent = props => (
  <div css={sliderContentCss} {...props}>
    {props.children}
  </div>
)

export default SliderContent
