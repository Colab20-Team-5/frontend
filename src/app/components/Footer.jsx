import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        
        <div className="logo-col">
    
            <p>Your personalized fitness journey, empowering you
                 to achieve your fitness goals</p>
        </div>
        <nav className="nav-col">
            <p>Company</p>
            <ul>
                <li><a className="footer-links" href="#">About Us</a></li>
                <li><a className="footer-links" href="#">Tems and conditions</a></li>
                <li><a className="footer-links" href="#">Privacy Policy</a></li>
                <li><a className="footer-links" href="#">Contact us</a></li>
            </ul>
        </nav>
        <nav className="nav-col">
            <p>Find us on</p>
            <ul className="footer-nav">
            <li>
                <Link href="/" classNameName="footer-logo">
                <Image src="/home.svg" alt="home nav icon" width={25} height={25} />
                </Link>
            </li>
            <li> 
            
            </li>
            <li> 
            <Link href="/" classNameName="footer-logo">
                <Image src="/home.svg" alt="home nav icon" width={25} height={25} />
                </Link>
            </li>
            <li> 
            <Link href="/" classNameName="footer-logo">
                <Image src="/home.svg" alt="home nav icon" width={25} height={25} />
                </Link>
            </li>
            <li> 
            <Link href="/" classNameName="footer-logo">
                <Image src="/home.svg" alt="home nav icon" width={25} height={25} />
                </Link>
            </li>
            </ul>
        </nav>
   </footer>
  )
}

export default Footer;