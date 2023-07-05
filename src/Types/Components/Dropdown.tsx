export interface DropdownMenuProps {
    dropdownKey: string;
    dropdownItemData: DropdownItemProps[]
}

export interface DropdownItemProps {
    id? : string;
    pageLink: string;
    label: string;
}