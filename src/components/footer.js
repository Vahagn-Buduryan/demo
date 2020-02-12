import React from 'react';
import '../styles/footer.css'; 

import fb from '../styles/footer/fb.svg';
import insta from '../styles/footer/insta.svg';
import youtube from '../styles/footer/youtube.svg';

function Footer () {
    return (
        <div id='footer'>
            <div id='categories'>
                <div>
                    <h2>About</h2>
                    <p>About us</p>
                    <p>Our Team</p>
                    <p>Lecturers</p>
                    <p>Contact us</p>
                </div>
                <div>
                    <h2>Services</h2>
                    <p>News</p>
                    <p>Blog</p>
                    <p>Articles</p>
                    <p>Videos</p>
                </div>
                <div>
                    <h2>Events</h2>
                    <p>All</p>
                    <p>Online</p>
                    <p>Offline</p>
                </div>
            </div>
            <div>
            <div id='contact_info'>
                <h2>Follow us</h2>
                <div className="row icons">
                    <img src={fb} alt="Facebook"/>
                    <img src={insta} alt="Instagram"/>
                    <img src={youtube} alt="Youtube"/>
                </div>
                <div className='footer-right'>
                    <h4>Vardananc 18/1 Yerevan,Armenia</h4>
                    <h4>+374 55 26 92 89</h4>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;