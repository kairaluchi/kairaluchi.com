import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import {
  AutoContainer,
  Column,
  AboutWidget,
  Confid,
  ContactInfo,
  FooterUpper,
  FormGroup,
  LinksWidget,
  NewsLetter,
  SocialLinks
} from './helper'

const LeftColumn = () => (
  <div className='col-md-6 col-sm-12 col-xs-12'>
    <div className='row clearfix'>
      <Column className='col-lg-6 col-sm-6 col-xs-12 column'>
        <AboutWidget>
          <h3>KAIRA LUCHI</h3>
          <p>
            The first mate and his Skipper too will do their very best to make
            the others comfortable in their tropic island nest. Fleeing from the
            Cylon tyranny last Battlestar galactica leads.
          </p>
          <SocialLinks className='social-links'>
            <a href='/'>
              <FaLinkedin />
            </a>
            <a href='/'>
              <FaFacebook />
            </a>
            <a href='/'>
              <FaTwitter />
            </a>
          </SocialLinks>
        </AboutWidget>
      </Column>
      <Column className='col-lg-6 col-sm-6 col-xs-12'>
        <h3>Contact Us</h3>
        <ContactInfo>
          <li>
            <h4>Address</h4>
            <p>Kaira Luchi LLC, Ellicott City, Maryland, USA.</p>
          </li>
          <li>
            <h4>Email Us</h4>
            <p>
              <a href='mailto:info@kairaluchi.com'>Info@KairaLuchi.Com</a>
            </p>
          </li>
          <li>
            <h4>Call Us</h4>
            <p>
              <a href='tel:3014427620'>+1 (301) 442 7620</a>
            </p>
          </li>
        </ContactInfo>
      </Column>
    </div>
  </div>
)

const RightColumn = ({ col1, col2 }) => (
  <div className='col-md-6 col-sm-12 col-xs-12'>
    <div className='row clearfix'>
      <Column className='col-lg-6 col-sm-6 col-xs-12 column'>
        <LinksWidget>
          <h3>Quick Links</h3>
          <div className='row clearfix'>
            <div className='col-lg-6 col-sm-6 col-xs-12'>
              <ul>
                {col2.map(({ name, link }) => (
                  <li key={name}>
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-lg-6 col-sm-6 col-xs-12'>
              <ul>
                {col1.map(({ name, link }) => (
                  <li key={name}>
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </LinksWidget>
      </Column>
      <Column className='col-lg-6 col-sm-6 col-xs-12 column'>
        <div>
          <h3>Subscribe Us</h3>
          <NewsLetter>
            <div>
              <p>Signup for our mailing list to get latest updates and news.</p>
            </div>
            <form method='post' name="subscribe" data-netlify="true">
              <FormGroup className='form-group'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email address'
                  onChange={() => {}}
                  required
                />
                <button type='submit' className='theme-btn btn-submit'>
                  <FaEnvelope />
                </button>
              </FormGroup>
              <Confid>
                <em>Your mail id is Confidential</em>
              </Confid>
            </form>
            <div>
              <a
                href='//www.dandb.com/verified/business/201079979/'
                target='_blank'
                rel='noopener noreferrer nofollow '
              >
                <img
                  src='//www.dandb.com/verified/seal/pixel/?t=201079979'
                  alt='dandb'
                />
              </a>
            </div>
          </NewsLetter>
        </div>
      </Column>
    </div>
  </div>
)

const FooterTop = ({ menu }) => {
  const half = Math.floor(menu.length / 2)
  const [col1, col2] = [menu.slice(0, half), menu.slice(half, menu.length)]
  return (
    <FooterUpper>
      <AutoContainer>
        <div className='row clearfix'>
          <LeftColumn />
          <RightColumn col1={col1} col2={col2} />
        </div>
      </AutoContainer>
    </FooterUpper>
  )
}

export default FooterTop
