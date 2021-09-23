import * as React from 'react'
import * as style from './Navbar.module.css'
import Logo from './Logo'
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from 'gatsby'

const Navbar = () => {
    const data = useStaticQuery(graphql`
    query {
        wpMenu {
            menuItems {
              nodes {
                path
                label
              }
            }
        }
    }
    `)
    const menuItems = data.wpMenu.menuItems.nodes.filter(item => item.path.split('/').length <= 3)

    return (
        <header className={style.header}>
            <div className={style.logoContain}>
                <Logo />
            </div>
            <nav className={style.navigation}>
                <div className={style.actions}>
                    <Link to="/book-an-appointment"><button className={style.bookButton}>BOOK AN APPOINTMENT</button></Link>
                    <div className={style.info + ' ' + style.clock}>
                        <StaticImage
                            src="../images/clock.svg"
                            alt="London Foot & Ankle Surgery Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={40}
                            height={40}
                        />
                        <p><span className={style.secondBlue}>Monday - Friday 8:30am - 6:30pm</span><br /><span className={style.mainBlue}>Saturday and Sunday Closed</span></p>
                    </div>
                    <div className={style.info + ' ' + style.mobile}>
                        <StaticImage
                            src="../images/mobile.svg"
                            alt="London Foot & Ankle Surgery Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={40}
                            height={40}
                        />
                        <p><span className={style.secondBlue}>0207 820 8007</span><br /><span className={style.mainBlue}>admin @londonfootandanklesurgery.co.uk</span></p>
                    </div>
                    <div className={style.info + ' ' + style.address}>
                        <StaticImage
                            src="../images/address.svg"
                            alt="London Foot & Ankle Surgery Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={40}
                            height={40}
                        />
                        <p><span className={style.secondBlue}>17 Harley Street</span><br /><span className={style.mainBlue}>London, W1G 9QH</span></p>
                    </div>
                    <div className={style.info + ' ' + style.whatsapp}>
                        <StaticImage
                            src="../images/whatsapp.svg"
                            alt="London Foot & Ankle Surgery Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={40}
                            height={40}
                        />
                        <p><span className={style.secondBlue}>Whatsapp</span><br /><span className={style.mainBlue}>+44 7389 826 519</span></p>
                    </div>
                </div>
                <ol className={style.menuWrapper}>
                    {
                        menuItems.map((item, i) => {
                            return <Link
                                key={'menuItem' + i}
                                to={item.path}
                            >
                                <li className={style.menuItem}>
                                    {item.label}
                                </li>
                            </Link>
                        })
                    }
                </ol>
            </nav>
        </header>
    )
}

export default Navbar