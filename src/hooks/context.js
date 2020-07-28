import React, { createContext, useContext, useReducer } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const StateContext = createContext()

export const StateProvider = ({ children, reducer }) => {
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
      allDataJson {
        edges {
          node {
            email
            address
            workingHours
            phone
            linkedIn
            facebook
            twitter
          }
        }
      }
    }
  `)

  const { allCloudinaryMedia, site, allDataJson } = data

  const num = (url = '') => {
    const [name] = url.split('/').slice(-1)[0].split('.')
    return Number(name.split('_')[0].slice(-1))
  }

  const slides = allCloudinaryMedia.edges
    .filter(image => image.node.public_id.split('/').includes('slides'))
    .map(image => image.node.secure_url)
    .sort((a, b) => {
      if (num(a) === num(b)) return 0
      else if (num(a) > num(b)) return -1
      else return 1
    })

  const [defaultImage] = data.allCloudinaryMedia.edges.filter(image =>
    image.node.public_id.split('/').includes('background')
  )
  const siteTitle = site.siteMetadata.title
  const [siteData] = allDataJson.edges.map(item => item.node)
  const initialState = { slides, siteTitle, defaultImage, siteData }

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext)
