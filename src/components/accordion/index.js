import React, { useState } from 'react'
import { useLocation } from '@reach/router'
import { useMedia } from 'react-media'
import { AccordionItem, AccordionButton } from './accordion'
import { Wrapper, ButtonWrapper, ContentWrapper, ContactWidget } from './helper'
import { AutoContainer } from '../common'
import MobileView from './accordionMobile'

const AccordionWrapper = ({ data }) => {
  const isMediumScreen = useMedia({ query: '(max-width: 768px)' })
  const { pathname = '' } = useLocation()
  const [, , activePath] = pathname.split('/')
  const initialPage = data.find(({ path }) => path === activePath) || data[0]
  const [show, setShow] = useState({ [initialPage.page]: true })

  const toggle = (page, path) => {
    setShow({
      [page]: true
    })
    const url = `/services/${path}`
    window.history.pushState(null, page, url)
  }

  return isMediumScreen ? (
    <MobileView data={data} />
  ) : (
    <Wrapper>
      <AutoContainer className='row'>
        <ButtonWrapper className='col-md-3 col-xs-12'>
          {data.map(({ page, path }) => (
            <AccordionButton
              key={page}
              path={path}
              show={show[page]}
              toggle={toggle}
              page={page}
            />
          ))}
          <ContactWidget />
        </ButtonWrapper>
        <ContentWrapper className='col-md-9 col-xs-12'>
          {data.map(({ page, content }) => (
            <AccordionItem
              key={page}
              page={page}
              show={show[page]}
              content={content}
            />
          ))}
        </ContentWrapper>
      </AutoContainer>
    </Wrapper>
  )
}

export default AccordionWrapper
