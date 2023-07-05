//Style
import '../../css/Components/dropdown.css';

//Types
import { DropdownItemProps } from '../../Types/Components/Dropdown';


export const DropdownItem = ({id, label, pageLink}: DropdownItemProps) => {

    return (
        <a className="dropdown-item" id={id} href={pageLink}>
            {label}
        </a>
    );
};