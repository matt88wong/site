import { ButtonProps } from "../Components/Button";
import { DropdownItemProps } from "../Components/Dropdown";

export interface NavbarLinkProps extends ButtonProps {
    pageLink: string;
    dropdownItems?: DropdownItemProps[];
}