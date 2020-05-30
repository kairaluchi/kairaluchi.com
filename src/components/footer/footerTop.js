import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'gatsby'
import { AutoContainer } from '../common'
import {
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

const LeftColumn = ({ siteData }) => (
  <div className='col-md-6 col-sm-12 col-xs-12'>
    <div className='row clearfix'>
      <Column className='col-lg-6 col-sm-6 col-xs-12 column'>
        <AboutWidget>
          <h3>KAIRA LUCHI</h3>
          <p>
            Connect with us on social media for the latest Kaira Luchi news, We
            regularly provide updates, useful tips and tricks, and upcoming
            training and events..
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
            <h4>Office</h4>
            <p>Kaira Luchi - {siteData.address}</p>
          </li>
          <li>
            <h4>Email Us</h4>
            <p>
              <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
            </p>
          </li>
          <li>
            <h4>Call Us</h4>
            <p>{siteData.phone}</p>
          </li>
        </ContactInfo>
      </Column>
    </div>
  </div>
)

const RightColumn = ({ col1, col2, action }) => (
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
                    <Link to={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-lg-6 col-sm-6 col-xs-12'>
              <ul>
                {col1.map(({ name, link }) => (
                  <li key={name}>
                    <Link to={link}>{name}</Link>
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
            <form
              action={action}
              name='subscribe'
              method='post'
              netlify-honeypot='bot-field'
              data-netlify='true'
            >
              <input type='hidden' name='bot-field' />
              <FormGroup className='form-group'>
                <input type='email' name='email' placeholder='Email address' />
                <button type='submit'>
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

const FooterTop = ({ menu, siteData }) => {
  const half = Math.floor(menu.length / 2)
  const [col1, col2] = [menu.slice(0, half), menu.slice(half, menu.length)]
  return (
    <FooterUpper>
      <AutoContainer>
        <div className='row clearfix'>
          <LeftColumn siteData={siteData} />
          <RightColumn
            col1={col1}
            col2={col2}
            action='/success?form=subscribe'
          />
        </div>
      </AutoContainer>
    </FooterUpper>
  )
}

export default FooterTop
