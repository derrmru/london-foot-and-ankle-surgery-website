import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
    return (
        <Link to="/">
            <StaticImage
                src="../images/lfas-logo.svg"
                alt="London Foot & Ankle Surgery Logo"
                placeholder="blurred"
                layout="fullWidth"
            />
        </Link>
    )
}

export default Logo