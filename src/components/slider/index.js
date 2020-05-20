import React from 'react'
import Slider from './slider'
import slideOne from '../../images/slides/slide1.jpeg'
import slideTwo from '../../images/slides/slide2.jpeg'
import slideThree from '../../images/slides/slide3.jpeg'
import slideFour from '../../images/slides/slide4.jpeg'

const images = [slideOne, slideTwo, slideThree, slideFour]

const displays = [
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Lorem ipsum dolor sit amet',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Creating the environment for business',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Lorem ipsum dolor sit amet',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Building a Better Business',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
]

export default () => <Slider slides={images} autoPlay={5} displays={displays} />
