import react from 'react';
//Style
import '../../css/Components/navbar.css';

//Components
import { NavbarLink } from './NavbarLink';
import { NavbarLogo } from './NavbarLogo';

//Content
import TextResources from '../../Content/TextResources.json';

//Types
import { DropdownItemProps } from '../../Types/Dropdown';

export const Navbar = () => {

    const funStuffDropdownItems: DropdownItemProps[] = [
        {
            "label": TextResources.dropdownItems.funStuff.music.label,
            "pageLink": TextResources.dropdownItems.funStuff.music.pageLink
        },
        {
            "label": TextResources.dropdownItems.funStuff.food.label,
            "pageLink": TextResources.dropdownItems.funStuff.food.pageLink
        },
        {
            "label": TextResources.dropdownItems.funStuff.football.label,
            "pageLink": TextResources.dropdownItems.funStuff.football.pageLink
        },
    ]

    return (
        <nav className="navbar-container">
            <NavbarLogo/>
            <NavbarLink pageLink="" title="about me"/>
            <NavbarLink pageLink="" title="fun stuff" dropdownItems={funStuffDropdownItems}/>
            <NavbarLink pageLink="" title="portfolio"/>
            <NavbarLink pageLink="" title="professional"/>
        </nav>
    );
};