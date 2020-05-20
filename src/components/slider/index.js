import React from 'react'
import Slider from './slider'

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

export default () => <Slider autoPlay={5} displays={displays} />
