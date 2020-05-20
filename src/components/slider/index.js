import React from 'react'
import Slider from './slider'

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]

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
