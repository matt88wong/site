//Components
import { DropdownItem } from "./DropdownItem";

//Style
import '../../css/Components/dropdown.css';

//Types
import { DropdownMenuProps, DropdownItemProps } from '../../Types/Components/Dropdown';

export const DropdownMenu = (props : DropdownMenuProps) => {
    return (
        <div className="dropdown-menu">
            {ConvertDropdownDataToNavbarDropdownItems(props.dropdownItemData)}
        </div>
    );
};

export function ConvertDropdownDataToNavbarDropdownItems (dropdownData: Array<DropdownItemProps>) {
    return (dropdownData.map((item: DropdownItemProps) => (
        <DropdownItem id={item.id} label={item.label} pageLink={item.pageLink}/>
    )));
};