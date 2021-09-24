import * as React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import * as style from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={style.global}>
            <Navbar />

            <div className={style.body}>{children}</div>

            <Footer />
        </div>
    )
}

export default Layout