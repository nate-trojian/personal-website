import React from 'react'
import {Link} from 'gatsby'
import Fade from 'react-reveal/Fade'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardCheck, faDrawPolygon} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const SocialFooter = () => {
    return (
        <footer className="footer">
            <Fade bottom={true} distance="25px" delay={3000}>
                <div className="social-links">
                    <Link to="/blog">
                        <FontAwesomeIcon className="social" icon={faDrawPolygon} size="2x" />
                    </Link>
                    <Link to="/resume">
                        <FontAwesomeIcon className="social" icon={faClipboardCheck} size="2x" />
                    </Link>
                    <a href="https://www.linkedin.com/in/nathaniel-trojian-269010104/" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon className="social" icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/nate-trojian" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon className="social" icon={faGithub} size="2x" />
                    </a>
                </div>
            </Fade>
        </footer>
    )
}
export default SocialFooter