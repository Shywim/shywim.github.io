import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import * as React from 'react'
import { Card, CardBody } from '../components/Card'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <Card>
        <CardBody>
          <div className="photo"></div>
          <h1>Matthieu Harlé</h1>
          <h2>Amiens, France</h2>
          <p className="description">
            Full stack developer, amateur photographer
          </p>
          <p className="emojis">👨🏻‍💻 📸 🐈 📚</p>
          <div className="work">
            <h3>Work</h3>
            <a
              className="somewhere github"
              href="https://github.com/Shywim"
              onClick={(e) => {
                setTimeout(() => {
                  location.href = e.currentTarget.href
                }, 150)
                e.preventDefault()
                window.plausible('github')
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="somewhere gitlab"
              href="https://gitlab.com/Shywim"
              onClick={(e) => {
                setTimeout(() => {
                  location.href = e.currentTarget.href
                }, 150)
                e.preventDefault()
                window.plausible('gitlab')
              }}
            >
              <FontAwesomeIcon icon={faGitlab} />
            </a>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <a
              href="mailto:contact@matthieuharle.com"
              onClick={(e) => {
                setTimeout(() => {
                  location.href = e.currentTarget.href
                }, 150)
                e.preventDefault()
                window.plausible('email')
              }}
            >
              bonjour@matthieuharle.com
            </a>
            <br />
            <br />
            <h3>
              <Link to="/resume">Resume</Link>
            </h3>
          </div>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default IndexPage
