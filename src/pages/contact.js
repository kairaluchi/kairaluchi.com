import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { AutoContainer } from '../components/common'

const LowerSection = styled.section`
  position: relative;
  padding: 60px 0px 50px;
  background-color: #ededed;

  h2 {
    font-size: 24px;
    margin-bottom: 25px;
    color: #181818;
    text-align: center;
  }
`
const MediumContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
`

const Column = styled.div`
  position: relative;
  margin-bottom: 40px;
`

const FieldLabel = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 5px;
  color: #999999;
  font-style: italic;
  text-transform: capitalize;
  
    sup {
      color: #ff0000;
      font-size: 16px;
      top: 0px;
    }
  }
`

const DefaultForm = styled.div`
  position: relative;

  &.form-group {
    position: relative;
    margin-bottom: 15px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  select,
  textarea {
    position: relative;
    display: block;
    width: 100%;
    line-height: 24px;
    padding: 10px 15px;
    border: 1px solid #e2e2e2;
    height: 46px;
    color: #222222;
    font-size: 15px;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    transition: all 300ms ease;
  }

  textarea {
    resize: none;
    height: 180px;
  }

  input,
  select,
  textarea {
    &:focus {
      border-color: #247fe1;
    }

    &.error {
      border-color: #ff0000;
    }
  }

  label {
    &.error {
      color: #ff0000;
      line-height: 20px;
      padding: 10px 0px 0px 0px;
      text-transform: capitalize;
      font-weight: 400;
      font-size: 14px;
    }
  }

  button {
    padding-left: 32px;
    padding-right: 32px;
    position: relative;
    padding: 10px 25px;
    line-height: 24px;
    text-transform: uppercase;
    background: #247fe1;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    border: 2px solid #247fe1;
    border-radius: 3px;

    &:hover {
      color: #247fe1;
      border-color: #247fe1;
      background: none;
    }
  }
`

const ButtonWrapper = styled.div`
  text-align: center;
  padding-top: 20px;
`

const ContactWrapper = ({ action }) => (
  <LowerSection>
    <AutoContainer>
      <MediumContainer>
        <div>
          <h2>Send Your Message</h2>
        </div>
        <Column>
          <DefaultForm>
            <form
              method='post'
              action={action}
              name='contact'
              netlify-honeypot='bot-field'
              data-netlify='true'
            >
              <input type='hidden' name='bot-field' />
              <div className='row clearfix'>
                <div className='form-group col-lg-6 col-md-6 col-xs-12'>
                  <FieldLabel>
                    Your Name <sup>*</sup>
                  </FieldLabel>
                  <input type='text' name='username' />
                </div>

                <div className='form-group col-lg-6 col-md-6 col-xs-12'>
                  <FieldLabel>
                    Your E-Mail <sup>*</sup>
                  </FieldLabel>
                  <input type='email' name='email' />
                </div>

                <div className='form-group col-lg-6 col-md-6 col-xs-12'>
                  <FieldLabel>Phone Number</FieldLabel>
                  <input type='text' name='phone' required />
                </div>

                <div className='form-group col-lg-6 col-md-6 col-xs-12'>
                  <FieldLabel>Subject</FieldLabel>
                  <input type='text' name='subject' />
                </div>

                <div className='form-group col-lg-12 col-sm-12 col-xs-12'>
                  <FieldLabel>
                    Message <sup>*</sup>
                  </FieldLabel>
                  <textarea name='message' />
                </div>
              </div>
              <ButtonWrapper>
                <button type='submit'>Send Message</button>
              </ButtonWrapper>
            </form>
          </DefaultForm>
        </Column>
      </MediumContainer>
    </AutoContainer>
  </LowerSection>
)

const ContactPage = props => (
  <Layout page='Contact Us' {...props}>
    <Seo title='Contact' />
    <ContactWrapper action='/success?form=contact' />
  </Layout>
)

export default ContactPage
