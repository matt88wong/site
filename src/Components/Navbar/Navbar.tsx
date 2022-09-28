import react from 'react';
//Style
import '../../css/Components/navbar.css';

//Components
import { NavbarLink } from './NavbarLink';

export const Navbar = () => {
    return (
        <nav className="navbar-container">
            <NavbarLink title="About"/>
        </nav>
    );
};