//Components
import { NavbarLink } from './NavbarLink';

//Style
import '../../css/Features/navbar.css';

//Types
import { NavbarLinkProps }  from '../../Types/Features/NavbarLink';

export const NavbarLogo = ( props: NavbarLinkProps ) => {
    return (
        <div className="navbar-logo-container">
            {/* <img src={ logo } width="500" height="300" alt='Matthew Wong' /> */}
            <NavbarLink pageLink={props.pageLink} label={'MATTHEW WONG'}/>
        </div>
    );
};