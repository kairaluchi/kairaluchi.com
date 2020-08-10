import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 20px;
  cursor: pointer;
  background: #eeeeee;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 550;
`

const SectionWrapper = styled.div`
  margin: 15px 0px 15px 0px;
`

const Content = styled.div`
  padding: 15px 10px 5px 10px;

  div {
    font-size: 1.1rem;

    div {
      margin-bottom: 30px;

      p {
        text-align: justify;
        line-height: 1.5em;
        margin-bottom: 10px;
      }
    }

    h3 {
      font-weight: 550;
      font-size: 1.6rem;
    }

    h4 {
      font-weight: 550;
      font-size: 1.3rem;
    }

    p {
      text-align: justify;
      line-height: 1.8em;
      margin-bottom: 20px;
    }

    ul {
      li {
        list-style: inside;
        margin-bottom: 10px;
      }
    }
  }
`

const AccordionHeader = React.forwardRef(({ toggle, label, title }, ref) => {
  const handleClick = () => {
    toggle(label)
    const { current } = ref
    current.scrollIntoView({ inline: 'start', block: 'start' })
  }
  return (
    <Button ref={ref} type='button' onClick={handleClick}>
      {title}
    </Button>
  )
})

const AccordionBody = ({ content }) => (
  <Content>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </Content>
)

const AccordionSection = ({ label, content, isOpen, toggle, title }) => {
  const accordionRef = useRef(null)

  return (
    <SectionWrapper>
      <AccordionHeader
        ref={accordionRef}
        toggle={toggle}
        label={label}
        title={title}
      />
      {isOpen && <AccordionBody isOpen={isOpen} content={content} />}
    </SectionWrapper>
  )
}

export default ({ data }) => {
  const [openSections, setOpenSections] = useState({})
  const isOpen = label => !!openSections[label]

  const toggleSection = label => {
    const open = !!openSections[label]
    setOpenSections({ [label]: !open })
  }

  return (
    <div>
      {data.map(({ page, path, content }) => (
        <AccordionSection
          key={path}
          label={path}
          title={page}
          toggle={toggleSection}
          isOpen={isOpen(path)}
          content={content}
        />
      ))}
    </div>
  )
}
