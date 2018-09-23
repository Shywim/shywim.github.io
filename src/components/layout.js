import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                "Développeur Full-Stack à Amiens. La conception de sites web et applications n'a pas de secret pour moi.",
            },
            {
              name: 'keywords',
              content:
                'développeur, developer, fullstack, frontend, backend, site, application, reactjs, react, nodejs, node, javascript, wordpress, elixir, docker, golang, php, java, android, ios, codeur, website, pwa, progressive web apps, redux',
            },
          ]}
        >
          <html lang="fr" />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
