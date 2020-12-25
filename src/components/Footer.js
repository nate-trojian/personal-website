import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const SocialFooter = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <FontAwesomeIcon className="social" icon={faCoffee} size="3x" />
                <FontAwesomeIcon className="social" icon={faLinkedin} size="3x" />
                <a href="https://github.com/nate-trojian">
                    <FontAwesomeIcon className="social" icon={faGithub} size="3x" />
                </a>
            </div>
        </footer>
    )
}
export default SocialFooter