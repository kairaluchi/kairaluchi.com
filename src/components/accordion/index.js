import React, { useState } from 'react'
import { AccordionItem, AccordionButton } from './accordion'
import { Wrapper, ButtonWrapper, ContentWrapper } from './helper'
import { AutoContainer } from '../common'

const defaultData = [
  {
    page: 'service 1',
    content: 'This is my <i>service</i> 1 content'
  },
  {
    page: 'service 2',
    content: 'This is my service 2 content'
  }
]

const AccordionWrapper = ({ data = defaultData }) => {
  const [show, setShow] = useState({ [data[0].page]: true })

  const toggle = (page) => {
    setShow({
      [page]: true
    })
  }

  return (
    <Wrapper>
      <AutoContainer className='row'>
        <ButtonWrapper className='col-md-3 col-xs-12'>
          {
            data.map(({ page }) => <AccordionButton key={page} show={show[page]} toggle={toggle} page={page} />)
          }
        </ButtonWrapper>
        <ContentWrapper className='col-md-9 col-xs-12'>
          {
            data.map(({ page, content }) => <AccordionItem key={page} page={page} show={show[page]} content={content} />)
          }
        </ContentWrapper>
      </AutoContainer>
    </Wrapper>
  )
}

export default AccordionWrapper
