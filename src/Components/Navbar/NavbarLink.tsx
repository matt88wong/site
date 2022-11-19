import react from 'react';
//Style
import '../../css/Components/navbar.css';
import '../../css/Components/dropdown.css';

//Types
import { ButtonProps }  from '../../Types/Button';

//Components
import { DropdownMenu } from '../Dropdown/DropdownMenu';

//Props
interface NavbarLinkProps extends ButtonProps {
    title: string;
    dropdown?: boolean;
}
 
export const NavbarLink = ( props: NavbarLinkProps ) => {
    return (
        <div className={"navbar-link " + (props.dropdown ? "dropdown-container": "") }>
                <a>{props.title}</a>
                {props.dropdown && <DropdownMenu dropdownKey={props.title}/>}
        </div>
    );
};