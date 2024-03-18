import { useEffect, useState } from 'react'
import Logo from './Images/IPS-logo.png';
import './Styles/Breadcrumb.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import FacebookIcon from '@mui/icons-material/Facebook';


export default function Breadcrumb() {
    const [IsDropdownOpen, setIsDropdownOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() =>{
        function handleResize(){
            setWindowSize(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        windowSize >1200 ? setIsDropdownOpen(false):setIsDropdownOpen(true);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[])

    function handleHambuggerMenu(e) {
        e.preventDefault();
        setIsDropdownOpen(!IsDropdownOpen);
    }
    return (
        <div className='Header-Container'>
            {/* Logo  */}
            <div className="Logo-Container">
                <div className="Logo-Image-Container">
                    <img src={Logo} alt="IPS-Logo" className="IPS-Logo" />
                </div>
                <div className="Header-Title-Container">
                    <h2 className='Header-Title'>IPS</h2>
                    <p className='Header-Sub-Title'>Indian Politics Services</p>
                </div>
            </div>

            {/* Blue Navbar */}
            <div className="Nav-Container">
                <ul className="Nav-Items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
                {/* <ul className="Social-Handlers">
                    <li><a href=""><InstagramIcon /></a></li>
                    <li><a href=""><FacebookIcon /></a></li>
                    <li><a href=""><LinkedInIcon /></a></li>
                    <li><a href=""><WhatsAppIcon /></a></li>
                </ul> */}
            </div>

            {/* Hambugger Menu  */}
            {windowSize <1200 && <a href="" onClick={(e) => handleHambuggerMenu(e)} className='Hamburger-Menu-Icon'><i className="fa-solid fa-bars"></i></a>}

             {/* Dropdown    */}
            {IsDropdownOpen && (
                <>
                    <div className={`Dropdown-Menu-Container `}>
                        <ul className={`${windowSize >1200 ? 'Hide-Dropdown': ''}`}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Contact</li>
                        </ul>

                        {/* <ul className="">
                            <li><a href=""><InstagramIcon /></a></li>
                            <li><a href=""><FacebookIcon /></a></li>
                            <li><a href=""><LinkedInIcon /></a></li>
                            <li><a href=""><WhatsAppIcon /></a></li>
                        </ul> */}
                    </div>
                </>
            )}
        </div>
    )
}
