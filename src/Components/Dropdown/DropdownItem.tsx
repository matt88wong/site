

import react from 'react';
//Style
import '../../css/Components/dropdown.css';

//Types
import { DropdownItemProps } from '../../Types/Dropdown';


export const DropdownItem = ({id, label, link}: DropdownItemProps) => {

    return (
        <a className="dropdown-item" id={id} href={link}>
            {label}
        </a>
    );
};