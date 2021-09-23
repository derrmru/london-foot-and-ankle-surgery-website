import * as React from 'react'
import * as style from './Conditions.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Conditions = () => {
  const data = useStaticQuery(graphql`
    query {
        wpPage(template: {templateName: {eq: "Homepage Template"}}) {
            homepageFields {
              treatmentsBackgroundImage {
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
              sectionHeading1
            }
          },
        allWpCondition(
            filter: {title: {in: ["Bunions", "Flat Foot", "Hammertoe – Claw Toe – Mallet Toe", "Ingrown Toe Nail"]}}
          ) {
            nodes {
              title
              slug
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        layout: FULL_WIDTH
                      )
                    }
                  }
                }
              }
            }
          }
    }
    `)

  console.log(data)
  const image = getImage(data.wpPage.homepageFields.treatmentsBackgroundImage.localFile.childImageSharp.gatsbyImageData);
  const heading = data.wpPage.homepageFields.sectionHeading1;

  return (
    <section className={style.container}>
      <div className={style.background}>
        <GatsbyImage
          image={image}
          alt="Foot and Ankle Anatomy"
          objectFit="cover"
        />
      </div>
      <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      <div className={style.conditions}>
        {
          data.allWpCondition.nodes.map((node, i) => {
            return <Link
              className={style.condition}
              key={'condition' + i}
              to={'/foot-conditions/' + node.slug}
            >
              <div className={style.conditionImage}>
                <GatsbyImage
                  image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                  alt="Medical Doctor with stethoscope"
                />
              </div>
              <p><strong>{node.title}</strong></p>
            </Link>
          })
        }
      </div>
    </section>
  )
}

export default Conditions