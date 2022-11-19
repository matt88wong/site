

import react from 'react';
//Style
import '../../css/Components/dropdown.css';

//Utility
import { ConvertDataToNavbarDropdownItems } from '../../Utility/Conversion';

//Types
import { DropdownMenuProps } from '../../Types/Dropdown';

//Data
import { FetchDropdownData } from '../../Data/Fetch';


export const DropdownMenu = (props : DropdownMenuProps) => {
    const dropdownData = FetchDropdownData();

    var dropdownItemsData = dropdownData.funstuff;
    //TODO: fix this up lol - when BE is introduced
    //Pass the key into the BE
    if (props.dropdownKey == 'funstuff') {
        dropdownItemsData = dropdownData.funstuff;
    }
            
    const dropdownItems = ConvertDataToNavbarDropdownItems(dropdownItemsData);

    return (
            <div className="dropdown-menu">
                {dropdownItems}
            </div>
    );
};