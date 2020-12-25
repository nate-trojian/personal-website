import React from 'react'
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardCheck, faDrawPolygon} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const SocialFooter = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <Link to="#">
                    <FontAwesomeIcon className="social" icon={faDrawPolygon} size="3x" />
                </Link>
                <Link to="#">
                    <FontAwesomeIcon className="social" icon={faClipboardCheck} size="3x" />
                </Link>
                <a href="https://www.linkedin.com/in/nathaniel-trojian-269010104/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon className="social" icon={faLinkedin} size="3x" />
                </a>
                <a href="https://github.com/nate-trojian" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon className="social" icon={faGithub} size="3x" />
                </a>
            </div>
        </footer>
    )
}
export default SocialFooter