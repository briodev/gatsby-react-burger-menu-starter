import React from "react"
import PropTypes from "prop-types"
import "./main-layout.css"

import NavBar from '../components/navigation/main-navbar'


const Layout = ({ children }) => {


  return (
    <>
      <NavBar />
      <div>
        <main>

          {children}
        
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout