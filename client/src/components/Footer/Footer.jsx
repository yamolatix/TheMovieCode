import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="content">
                <div className="top">
                    <div className="media-icons">
                        <a href="https://www.linkedin.com/in/yamilaortiztoscano/ title=" target="_blank" title="Linkedin" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://github.com/yamolatix" target="_blank" title="GitHub" rel="noopener noreferrer"><i className='bx bxl-github' ></i></a>
                    </div>
                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">© 2022 The Movie Code by Yamila Ortiz Toscano</span>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
