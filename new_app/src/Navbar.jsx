import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul id="navigation">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li>
                        <a href="blog.html">Blog</a>
                        <ul className="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog_details.html">Blog Details</a></li>
                            <li><a href="elements.html">Elements</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            {/* left Btn */}
            <div className="header-right-btn f-right d-none d-lg-block  ml-30">
                <a href="#" className="header-btn">Visit Us</a>
            </div>
        </div>
    );
}

export default Navbar;
