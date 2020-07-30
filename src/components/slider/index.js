import React from 'react'
import styled from 'styled-components'
import Slider from './slider'
import { Link } from 'gatsby'

const LearnMore = styled(Link)`
  color: #ffffff;
  background-color: #247fe1;
  padding: 12px;
  font-size: 15px;
  border-radius: 4px;

  &:hover {
    background-color: #484848;
    color: #ffffff;
  }
`

const displays = [
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Cutting edge technology begins here',
    caption: 'Using cutting edge technology for modernization and migration'
  },
  {
    tag: 'Welcome to Kaira Luchi',
    title: `Solving tomorrow's challenges, today`,
    caption:
      'Using new innovations in technology to help companies solve challenging problems'
  },
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Your vision + our expertise = Results',
    caption: <LearnMore to='/about'>Learn More</LearnMore>
  },
  {
    tag: 'Welcome to Kaira Luchi',
    title: 'Small changes, big results, excellence achieved',
    caption:
      'Helping your business grow by supporting your continuous improvement journey'
  }
]

export default () => <Slider autoPlay={100} displays={displays} />
