import React, { createContext, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
    query allData {
      site {
        siteMetadata {
          title
        }
      }
      allCloudinaryMedia {
        edges {
          node {
            public_id
            secure_url
          }
        }
      }
    }
  `)

  const slides = data.allCloudinaryMedia.edges
    .filter(image => image.node.public_id.split('/').includes('test-slides'))
    .map(image => image.node.secure_url)
  const [defaultImage] = data.allCloudinaryMedia.edges.filter(image =>
    image.node.public_id.split('/').includes('background')
  )
  const siteTitle = data.site.siteMetadata.title

  return (
    <StateContext.Provider value={{ slides, siteTitle, defaultImage }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext)
