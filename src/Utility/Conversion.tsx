//Hold custom conversion stuff here

//Convert JSON to dropdown button items
import { DropdownItemProps } from "../Types/Dropdown";
import { DropdownItem } from "../Components/Dropdown/DropdownItem";

export function ConvertDropdownDataToNavbarDropdownItems (dropdownData: Array<DropdownItemProps>) {
    return (dropdownData.map((item: DropdownItemProps) => (
        <DropdownItem id={item.id} label={item.label} link={item.link}/>
    )));
};