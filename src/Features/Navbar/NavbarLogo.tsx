//Components
import { NavbarLink } from './NavbarLink';

//Style
import '../../css/Components/navbar.css';

//Types
import { ButtonProps }  from '../../Types/Button';

export const NavbarLogo = ( props: ButtonProps ) => {
    return (
        <div className="navbar-logo-container">
            {/* <img src={ logo } width="500" height="300" alt='Matthew Wong' /> */}
            <NavbarLink pageLink={props.pageLink} label={'MATTHEW WONG'}/>
        </div>
    );
};