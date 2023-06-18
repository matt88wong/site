//Dependencies
import { Link } from 'react-router-dom';

//Style
import '../../css/Components/navbar.css';
import '../../css/Components/dropdown.css';

//Types
import { ButtonProps }  from '../../Types/Button';
import { DropdownItemProps } from '../../Types/Dropdown';

//Components
import { DropdownMenu } from '../Dropdown/DropdownMenu';

//Props
interface NavbarLinkProps extends ButtonProps {
    label: string;
    dropdownItems?: DropdownItemProps[];
}
 
export const NavbarLink = ( props: NavbarLinkProps ) => {
    return (
        <div className={"navbar-link " + (props.dropdownItems ? "dropdown-container": "") }>
                <Link to={props.pageLink}>{props.label}</Link>
                {props.dropdownItems && <DropdownMenu dropdownKey={props.label} dropdownItemData={props.dropdownItems}/>}
        </div>
    );
};