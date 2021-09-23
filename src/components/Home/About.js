import * as React from 'react'
import * as style from './About.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const About = () => {
    const data = useStaticQuery(graphql`
    query {
        wpPage(template: {templateName: {eq: "Homepage Template"}}) {
            homepageFields {
              leftText {
                leftHeader
                leftDetailsText
              }
              rightImage {
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
            }
          }
    }
    `)

    const text = data.wpPage.homepageFields.leftText;
    const image = getImage(data.wpPage.homepageFields.rightImage.localFile.childImageSharp.gatsbyImageData);
    return (
        <section className={style.container}>
            <div className={style.text}>
                <div className={style.textBox}>
                    <h1 dangerouslySetInnerHTML={{ __html: text.leftHeader }} />
                    <p dangerouslySetInnerHTML={{ __html: text.leftDetailsText }} />
                </div>
            </div>
            <div className={style.image}>
                <GatsbyImage
                    image={image}
                    alt="Foot and Ankle Anatomy"
                />
            </div>
        </section>
    )
}

export default About