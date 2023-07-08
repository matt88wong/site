//Style
import '../../css/Features/navbar.css';

//Components
import { NavbarLink } from './NavbarLink';
import { NavbarLogo } from './NavbarLogo';

//Content
import TextResources from '../../Content/TextResources.json';

export const Navbar = () => {

    return (
        <nav className="navbar-container">
            <NavbarLogo pageLink={TextResources.pageLinks.home.pageLink} label={TextResources.pageLinks.home.label}/>
            <NavbarLink pageLink={TextResources.pageLinks.coolStuff.pageLink} label={TextResources.pageLinks.coolStuff.label}/>
            <NavbarLink pageLink={TextResources.pageLinks.portfolio.pageLink} label={TextResources.pageLinks.portfolio.label}/>
        </nav>
    );
};