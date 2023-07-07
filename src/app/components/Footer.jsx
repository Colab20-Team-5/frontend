import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        
        <div className="nav-col">
            <h3>BeFit</h3>
            <p>Your personalized fitness journey, empowering you
                 to achieve your fitness goals</p>
        </div>
        <nav className="nav-col">
            <h3>Company</h3>
            <ul>
                <li><a className="footer-links" href="#">About Us</a></li>
                <li><a className="footer-links" href="#">Tems and conditions</a></li>
                <li><a className="footer-links" href="#">Privacy Policy</a></li>
                <li><a className="footer-links" href="#">Contact us</a></li>
            </ul>
        </nav>
        <nav className="nav-col">
            <h3>Find us on</h3>
            <ul className="socials">
                <li>
                    <Link href="/" classNameName="footer-logo">
                    <Image src="/fb.svg" alt="home nav icon" width={25} height={25} />
                    </Link>
                </li>
                <li> 
                
                </li>
                <li> 
                <Link href="/" classNameName="footer-logo">
                    <Image src="/apple.svg" alt="home nav icon" width={25} height={25} />
                    </Link>
                </li>
                <li> 
                <Link href="/" classNameName="footer-logo">
                    <Image src="/mdi_instagram.svg" alt="home nav icon" width={25} height={25} />
                    </Link>
                </li>
                <li> 
                <Link href="/" classNameName="footer-logo">
                    <Image src="/bxl_play-store.svg" alt="home nav icon" width={25} height={25} />
                    </Link>
                </li>
            </ul>
            <p class="copyright">Copyright &copy; 2023-BeFit, specific moments captured</p>
        </nav>
   </footer>
  )
}

export default Footer;