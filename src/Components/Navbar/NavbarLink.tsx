import react from 'react';
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
    title: string;
    dropdownItems?: DropdownItemProps[];
}
 
export const NavbarLink = ( props: NavbarLinkProps ) => {
    return (
        <div className={"navbar-link " + (props.dropdownItems ? "dropdown-container": "") }>
                <a>{props.title}</a>
                {props.dropdownItems && <DropdownMenu dropdownKey={props.title} dropdownItemData={props.dropdownItems}/>}
        </div>
    );
};