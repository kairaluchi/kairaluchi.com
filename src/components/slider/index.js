import React from 'react'
import Slider from './slider'

const displays = [
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Cutting edge technology begins here',
    caption: 'Using cutting edge technology for modernization and migration'
  },
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Solving tomorrows challenges, today',
    caption: 'Using new innovations in technology to help companies solve challenging problems'
  },
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Your vision + our expertise = Growth',
    caption: 'Your vision + our expertise = Results'
  },
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Small changes, big results, excellence achieved',
    caption: 'Helping your business grow by supporting your continuous improvement journey'
  }
]

export default () => <Slider autoPlay={7} displays={displays} />
