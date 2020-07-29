import styled, { css } from 'styled-components'
import subMenuIcon from '../../images/icons/submenu-icon.png'

export const AutoContainer = styled.div`
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
`

export const Navigation = styled.ul`
  position: relative;
  margin: 0px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;

  > li {
    position: relative;
    float: left;
    padding: 0px;

    > a {
      position: relative;
      display: block;
      padding: 15px 20px 12px;
      font-size: 14px;
      color: ${({ contrast }) => (contrast ? '#181818' : '#ffffff')};
      line-height: 30px;
      border-top: none;
      border-bottom: 3px solid transparent;
      text-transform: uppercase;
      opacity: 1;
      transition: all 500ms ease;
      -moz-transition: all 500ms ease;
      -webkit-transition: all 500ms ease;
      -ms-transition: all 500ms ease;
      -o-transition: all 500ms ease;

      &:hover,
      &.current,
      &.current-menu-item {
        border-color: #247fe1;
        opacity: 1;
      }
      
      @media (max-width: 768px) {
        ${({ isBounceMenu }) => (!isBounceMenu && 'padding-left: 0px')}
      }
      
    }

    &.dropdown {
      &:hover {
        > ul {
          visibility: visible;
          display: block;
          opacity: 1;
          top: 100%;
        }
      }
    }

    &:hover,
    &.current,
    &.current-menu-item {
      > a {
        border-color: #247fe1;
        opacity: 1;
      }
    }

    &:hover {
      a {
        &:after {
          opacity: 1;
        }
      }
    }

    > ul {
      position: absolute;
      left: 0px;
      top: 150%;
      width: 210px;
      padding: 0px;
      z-index: 100;
      display: none;
      background: #283745;
      transition: all 500ms ease;
      -moz-transition: all 500ms ease;
      -webkit-transition: all 500ms ease;
      -ms-transition: all 500ms ease;
      -o-transition: all 500ms ease;

      &.from-right {
        left: auto;
        right: 0px;
      }

      > li {
        position: relative;
        width: 100%;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.2);

        &:last-child {
          border-bottom: none;
        }

        > a {
          position: relative;
          display: block;
          padding: 13px 15px 13px 18px;
          line-height: 22px;
          font-weight: 600;
          font-size: 13px;
          text-transform: uppercase;
          color: #ffffff;
          transition: all 500ms ease;
          -moz-transition: all 500ms ease;
          -webkit-transition: all 500ms ease;
          -ms-transition: all 500ms ease;
          -o-transition: all 500ms ease;
        }

        &:hover {
          > a {
            color: #247fe1;
          }
        }

        &.dropdown {
          > a {
            &:after {
              font-family: "FontAwesome";
              content: "\f061";
              position: absolute;
              right: 10px;
              top: 15px;
              width: 10px;
              height: 20px;
              display: block;
              color: #ffffff;
              line-height: 20px;
              font-size: 10px;
              text-align: center;
              z-index: 5;
            }
          }

          &:hover {
            > a {
              &:after {
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
`

export const NavbarCollapse = styled.div`
  padding: 0px;

  @media (max-width: 768px) {
    display: ${({ open }) => open ? 'block !important' : 'none !important'};
  }
  
  > ul {
    li {
      &.dropdown {
        &.dropdown-btn {
          position: absolute;
          right: 10px;
          top: 6px;
          width: 34px;
          height: 30px;
          border: 1px solid #ffffff;
          background: url(${subMenuIcon}) center center no-repeat;
          background-size: 20px;
          cursor: pointer;
          z-index: 5;
          display: none;
        }
      }
    }
  }
`

const bounceMenu = css`
  @media (max-width: 768px) {
     width: 200px;
     text-align: right;
  }
`

const mainMenu = css`
  @media (max-width: 768px) {
     width: 200px;
     text-align: left;
  }
`

export const MainMenu = styled.nav`
  position: relative;
  padding-top: 0px;
  padding-bottom: 0px;
  ${({ isBounceMenu }) => (isBounceMenu ? bounceMenu : mainMenu)}
`
