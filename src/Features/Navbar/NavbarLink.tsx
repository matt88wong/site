//Dependencies
import { Link } from 'react-router-dom';

//Style
import '../../css/Features/navbar.css';
import '../../css/Components/dropdown.css';

//Types
import { NavbarLinkProps } from '../../Types/Features/NavbarLink';

//Components
import { DropdownMenu } from '../../Components';
 
export const NavbarLink = ( props: NavbarLinkProps ) => {
    return (
        <div className={"navbar-link " + (props.dropdownItems ? "dropdown-container": "") }>
                <Link to={props.pageLink}>{props.label}</Link>
                {props.dropdownItems && <DropdownMenu dropdownKey={props.label} dropdownItemData={props.dropdownItems}/>}
        </div>
    );
};