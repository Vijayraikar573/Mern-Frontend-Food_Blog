import React from 'react'
import '../styles/footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="row1">
                        <a href="/"><i className="fa fa-facebook"></i></a>
                        <a href="/"><i className="fa fa-instagram"></i></a>
                        <a href="/"><i className="fa fa-youtube"></i></a>
                        <a href="/"><i className="fa fa-twitter"></i></a>
                    </div>

                    <div className="row1">
                        <ul>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">Our Services</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                            <li><a href="/">Career</a></li>
                        </ul>
                    </div>

                    <div className="row1">
                         Copyright © 2021 ✌️😎 - All rights reserved || Food Blog
                    </div>
                </div>
            </footer>




        </div>
    )
}

export default Footer;