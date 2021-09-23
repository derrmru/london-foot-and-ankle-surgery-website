import * as React from 'react'
import * as style from './Banner.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
        wpPage(template: {templateName: {eq: "Homepage Template"}}) {
            homepageFields {
              bannerImages {
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                                placeholder: TRACED_SVG
                                formats: [AUTO, WEBP, AVIF]
                                layout: FULL_WIDTH
                              )
                    }
                  }
                }
                title
                text
              }
            }
          }
    }
    `)

  const image = getImage(data.wpPage.homepageFields.bannerImages[0].image.localFile.childImageSharp.gatsbyImageData)

  return (
    <div className={style.bannerContainer}>
      <div className={style.headline}>
        <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.homepageFields.bannerImages[0].title }} />
        <p dangerouslySetInnerHTML={{ __html: data.wpPage.homepageFields.bannerImages[0].text }} />
        <div className={style.bannerButtons}>
          <Link to="/about-us"><button>DISCOVER MORE</button></Link>
          <Link to="/foot-conditions"><button>VIEW OUR SERVICES</button></Link>
        </div>
      </div>
      <GatsbyImage
        image={image}
        alt="Homgepage banner for the London Foot & Ankle Surgery"
        style={{ height: '100%' }}
        objectPosition='65% 50%'
      />
    </div >
  )
}

export default Banner