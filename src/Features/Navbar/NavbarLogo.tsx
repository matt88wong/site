//Components
import { NavbarLink } from './NavbarLink';

//Style
import '../../css/Features/navbar.css';

//Types
import { NavbarLinkProps }  from '../../Types/Features/NavbarLink';

export const NavbarLogo = ( props: NavbarLinkProps ) => {
    const { label, pageLink } = props;
    return (
        <div className="navbar-logo-container">
            <NavbarLink pageLink={pageLink} label={label}/>
        </div>
    );
};