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
      allCloudinaryMedia(
        filter: { public_id: { regex: "/^slide/" } }
        sort: { fields: public_id, order: DESC }
      ) {
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
      cloudinaryMedia(public_id: { regex: "/^background/" }) {
        secure_url
      }
    }
  `)

  const { allCloudinaryMedia, site, allDataJson, cloudinaryMedia } = data

  const slides = allCloudinaryMedia.edges.map(image => image.node.secure_url)

  const defaultImage = cloudinaryMedia?.secure_url
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
