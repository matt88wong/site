import react from 'react';
//Style
import '../../css/Components/navbar.css';

//Components
import { NavbarLink } from './NavbarLink';
import { NavbarLogo } from './NavbarLogo';

export const Navbar = () => {

    return (
        <nav className="navbar-container">
            <NavbarLogo/>
            <NavbarLink pageLink="" title="about me"/>
            <NavbarLink pageLink="" title="fun stuff" dropdown />
            <NavbarLink pageLink="" title="portfolio"/>
            <NavbarLink pageLink="" title="professional"/>
        </nav>
    );
};