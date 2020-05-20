import React from 'react'
import { css } from 'styled-components'

const dotCss = css`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${props => (props.active ? 'black' : 'white')};
`

const dotsCss = css`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Dot = ({ active }) => <span css={dotCss} active={active} />

const Dots = ({ slides, activeSlide }) => (
  <div css={dotsCss}>
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i} />
    ))}
  </div>
)

export default Dots
