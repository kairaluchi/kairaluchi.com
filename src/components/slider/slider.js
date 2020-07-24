import React, { useState, useEffect, useRef } from 'react'
import { css } from 'styled-components'
import { useStateValue } from '../../hooks/context'
import SliderContent from './sliderContent'
import Slide from './slide'
import SliderDisplay from './slideDisplay'
import Arrow from './arrow'
import Dots from './dots'
import { AutoContainer } from '../common'

const sliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`

const getWidth = () => typeof window !== 'undefined' && window.innerWidth

const Slider = props => {
  const [{ slides }] = useStateValue()
  const { displays } = props

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { translate, transition, activeSlide, _slides } = state

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })

  const smoothTransition = () => {
    let _slides

    if (activeSlide === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    } else if (activeSlide === 0) {
      _slides = [lastSlide, firstSlide, secondSlide]
    } else {
      _slides = slides.slice(activeSlide - 1, activeSlide + 2)
    }

    setState({ ...state, _slides, transition: 0, translate: getWidth() })
  }

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const smooth = e => {
      if (e.target.className.includes('sliderContent')) {
        transitionRef.current()
      }
    }

    const resize = () => {
      resizeRef.current()
    }

    const interval = setInterval(play, props.autoPlay * 1000)
    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)
    }
  }, [props.autoPlay])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition, state])

  return (
    <div css={sliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide
            width={getWidth()}
            key={_slide + i}
            content={_slide}
            position={`${i}`}
          />
        ))}
      </SliderContent>

      <Arrow direction='left' handleClick={prevSlide} />
      <Arrow direction='right' handleClick={nextSlide} />
      <Dots slides={slides} activeSlide={activeSlide} />
      <AutoContainer><SliderDisplay activeSlide={activeSlide} displays={displays} /></AutoContainer>
    </div>
  )
}

export default Slider
