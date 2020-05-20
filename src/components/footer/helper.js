import styled from 'styled-components'

export const AutoContainer = styled.div`
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
`

export const Column = styled.div`
  position: relative;
  margin-bottom: 40px;

  h3 {
    position: relative;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 32px;
    color: #ffffff;
  }
`

export const FooterUpper = styled.div`
  position: relative;
  padding: 100px 0px 50px;
  color: #9b9b9b;

  a {
    transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;

    &:hover {
      color: #ffffff;
    }
  }
`

export const AboutWidget = styled.div`
  font-size: 15px;

  h3 {
    font-size: 30px;
    font-weight: 700;
    color: #247fe1;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 6px solid #ffffff;
    border-bottom: 6px solid #ffffff;
    width: 200px;
  }

  p {
    margin-bottom: 30px;
  }
`

export const SocialLinks = styled.div`
  a {
    position: relative;
    display: inline-block;
    font-size: 16px;
    width: 44px;
    height: 44px;
    line-height: 50px;
    text-align: center;
    margin: 0px 5px 10px 0px;
    color: #9b9b9b;
    background: #3b3b3b;
    border-radius: 50%;
    transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;

    &:hover {
      color: #ffffff;
      background: #247fe1;
    }
  }
`

export const ContactInfo = styled.ul`
  font-size: 16px;

  li {
    margin-bottom: 10px;

    h4 {
      font-size: 16px;
      color: #ffffff;
      margin-bottom: 5px;
    }

    a {
      color: #9b9b9b;
    }
  }
`

export const LinksWidget = styled.div`
  li {
    position: relative;
    margin-bottom: 15px;

    a {
      position: relative;
      display: block;
      font-size: 15px;
      color: #999999;
      line-height: 20px;

      a:hover {
        color: #ffffff;
      }
    }
  }
`
export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 10px;

  input[type="text"],
  input[type="email"] {
    position: relative;
    display: block;
    width: 100%;
    line-height: 26px;
    padding: 11px 50px 11px 15px;
    background: #2b2b2b;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 5px;

    &:focus {
      background: #181818;
    }
  }

  input[type="submit"],
  button {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 50px;
    height: 50px;
    line-height: 46px;
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    background: #247fe1;
    border-radius: 0px 5px 5px 0px;

    &:focus,
    &:hover {
      background: #888888;
    }
  }
`

export const NewsLetter = styled.div`
  p {
    padding-bottom: 20px;
  }
`

export const Confid = styled.div`
  position: relative;
  font-size: 14px;
  color: #9b9b99;
  margin-bottom: 20px;
`
