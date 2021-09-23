import * as React from "react"
import Layout from '../components/templates/Layout'
import Banner from '../components/Home/Banner'
import ContactForm from '../components/ContactForm'
import About from '../components/Home/About'
import Conditions from '../components/Home/Conditions'
import Team from '../components/Home/Team'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <Banner />
      <ContactForm
        action="Book Your Visit"
        submitMessage="BOOK NOW"
      />
      <About />
      <Conditions />
      <Team />
    </Layout>
  )
}

export default IndexPage
