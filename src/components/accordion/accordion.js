import React from 'react'
import styled from 'styled-components'
import { RiArrowRightSLine } from 'react-icons/ri'

const Button = styled.button`
  color: ${props => (props.show ? '#247fe1' : '#777777')};
  background: #ffffff;
  line-height: 30px;
  padding: 10px 20px;
  margin-bottom: 10px;
  text-transform: capitalize;
  font-size: 17px;
  font-weight: 400;
  border: 2px solid ${props => (props.show ? '#247fe1' : '#dcdcdc')};
  display: flex;
  justify-content: space-between;

  svg {
    margin: auto 5px;
  }
`

const Content = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};

  h2 {
    text-align: center;
    text-transform: capitalize;
  }
`

export const AccordionButton = ({ toggle, page, show }) => {
  const handleClick = () => {
    toggle(page)
  }

  return (
    <Button show={show} onClick={handleClick}>
      <span>{page}</span>
      <RiArrowRightSLine />
    </Button>
  )
}

export const AccordionItem = ({ content, show, page }) => {
  return show ? (
    <Content show={show}>
      <h2>{page}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Content>
  ) : (
    <span />
  )
}
