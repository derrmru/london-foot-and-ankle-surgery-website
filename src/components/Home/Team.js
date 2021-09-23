import * as React from 'react'
import * as style from './Team.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Team = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpTeam(
                filter: {title: {in: ["Kaser Nazir", "Steven Thomas", "Anjelica Wright"]}}
              ) {
                nodes {
                  title
                  slug
                  featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
              }
            wpPage(isFrontPage: {eq: true}) {
                homepageFields {
                  sectionHeading2
                }
            }  
        }
    `)

    console.log('team:', data)
    const title = data.wpPage.homepageFields.sectionHeading2;
    return (
        <section className={style.container}>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <div className={style.profiles}>
                {
                    data.allWpTeam.nodes.reverse().map((profile, i) => {
                        return <Link
                            key={'profile' + i}
                            className={style.profile}
                            to={'/our-teams/' + profile.slug}
                        >
                            <div className={style.profileImage}>
                                <div className={style.displaced}></div>
                                <GatsbyImage
                                    image={profile.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                    alt={'Profile image of ' + profile.title}
                                />
                            </div>
                            <div className={style.description}>
                                <p>{profile.title}</p>
                                <button>READ MORE</button>
                            </div>
                        </Link>
                    })
                }
            </div>
        </section>
    )
}

export default Team