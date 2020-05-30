import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { AutoContainer } from '../components/common'

const aboutUsColumn = [
  {
    num: '01.',
    title: 'Our Mission',
    text:
      'To empower clients to achieve excellence, through implementation of innovative ideas... one solution at a time'
  },
  {
    num: '02.',
    title: 'Our Vision',
    text:
      'To be the leading and most trusted company for providing business process improvements and IT solutions to our customers worldwide'
  }
]

const Wrapper = styled.div`
  position: relative;
`

const Column = styled.div`
  position: relative;
`

const InnerBox = styled.div`
  position: relative;
  padding-left: 90px;
`

const Count = styled.div`
  position: absolute;
  left: 0px;
  top: 12px;
  color: #247fe1;
  font-size: 50px;
  font-weight: 700;
  font-family: "Lora", serif;
`

const TitleBox = styled.div`
  position: relative;

  h4 {
    font-family: "Source Sans Pro", sans-serif;
    color: #247fe1;
    font-size: 15px;
    font-style: italic;
    margin-bottom: 0px;
  }

  h3 {
    position: relative;
    color: #ffffff;
    font-size: 24px;
  }
`

const Text = styled.div`
  color: #999999;
  font-size: 20px;
  line-height: 1.5em;
`

const ColumnSection = styled.div`
  background-color: #272727;
  padding-top: 100px;
  padding-bottom: 100px;
`

const TagLine = styled.div`
  font-size: 28px;
  text-align: center;
  line-height: 1.5em;
  padding-top: 80px;
  padding-bottom: 50px;
`

const LowerSection = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;

  h3 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  li {
    font-size: 26px;
    margin-bottom: 5px;
    line-height: 1.5em;
  }
`

const TopSection = styled.section`
  padding-bottom: 80px;
  text-align: center;

  h3 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  li {
    font-size: 25px;
    margin-bottom: 5px;
    line-height: 1.5em;
  }
`


const AboutWrapper = () => (
  <Wrapper>
    <AutoContainer>
      <TagLine>
        Kaira Luchi LLC is a consulting firm, which strives to deliver IT
        solutions and business process improvements to customers worldwide. This
        is achieved through servant leadership.
      </TagLine>
      <TopSection>
        <AutoContainer>
          <h3>We Serve First</h3>
          <ul>
            <li>
              We listen and identify the needs of our customers and put those
              needs first
            </li>
            <li>
              We help and empower our customers to develop and achieve beyond
              expectation
            </li>
            <li>
              We strive for continuous improvement, because the bar for excellence
              can always be increased
            </li>
          </ul>
        </AutoContainer>
      </TopSection>
    </AutoContainer>
    <ColumnSection className='row clearfix'>
      <AutoContainer>
        {aboutUsColumn.map(({ num, title, text }) => (
          <Column key={num} className='col-md-6 col-sm-6 col-xs-12'>
            <InnerBox>
              <Count>{num}</Count>
              <TitleBox>
                <h3>{title}</h3>
              </TitleBox>
              <Text>{text}</Text>
            </InnerBox>
          </Column>
        ))}
      </AutoContainer>
    </ColumnSection>
    <LowerSection>
      <AutoContainer>
        <h3>Core Values</h3>
        <ul>
          <li>
            Providing <b>Innovation</b> to our customers, which sets them apart
            from others
          </li>
          <li>
            <b>Leading with Integrity</b> in all that we do
          </li>
          <li>
            <b>Passionately delivering</b> beyond expectation
          </li>
          <li>
            <b>Commitment</b> to our customers through <b>servant leadership</b>
          </li>
        </ul>
      </AutoContainer>
    </LowerSection>
  </Wrapper>
)

const AboutPage = props => (
  <Layout page='About Us' {...props}>
    <Seo title='About' />
    <AboutWrapper />
  </Layout>
)

export default AboutPage
