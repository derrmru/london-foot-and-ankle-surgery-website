import * as React from 'react'
import * as style from './Footer.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={style.colContainer}>
                <div className={style.col}>
                    <h3>Get In Touch</h3>
                    <p className={style.item}>
                        17 Harley street (Harley Street Medical Centre), London, W1G 9QH
                    </p>
                    <p className={style.item}>
                        Cadogan Clinic, 120 Sloane Street, London, SW1X 9BW
                    </p>
                    <p className={style.item}>
                        London Independent Hospital, 1 Beaumont Square, London, E1 4NL
                    </p>
                </div>
                <div className={style.col}>
                    <h3>Call Us</h3>
                    <div className={style.teleLine}>
                        <a href="tel:+442078208007">
                            <StaticImage
                                src="../images/telephone.svg"
                                alt="Telephone calling icon"
                                placeholder="blurred"
                                layout="fixed"
                                width={30}
                                height={30}
                            />
                        </a>
                        <div>+44 207 820 8007</div>
                    </div>

                </div>
                <div className={style.col}>
                    <h3>Follow Us</h3>
                    <div className={style.social}>
                        <a href="https://www.facebook.com/londonfootandanklesurgery">
                            <StaticImage
                                src="../images/facebook.png"
                                alt="Facebook icon"
                                placeholder="blurred"
                                layout="fixed"
                                width={30}
                                height={30}
                            />
                        </a>
                        <a href="https://www.instagram.com/footsurgeonlondon/">
                            <StaticImage
                                src="../images/insta.png"
                                alt="Instagram icon"
                                placeholder="blurred"
                                layout="fixed"
                                width={30}
                                height={30}
                            />
                        </a>
                        <a href="https://twitter.com/ankleinfo">
                            <StaticImage
                                src="../images/twitter.png"
                                alt="Twitter icon"
                                placeholder="blurred"
                                layout="fixed"
                                width={30}
                                height={30}
                            />
                        </a>
                        <a href="https://wa.me/442078208007">
                            <StaticImage
                                src="../images/whatsapp.png"
                                alt="Whatsapp icon"
                                placeholder="blurred"
                                layout="fixed"
                                width={30}
                                height={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer