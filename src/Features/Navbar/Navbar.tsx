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
            "label": TextResources.pageLinks.funStuff.music.label,
            "pageLink": TextResources.pageLinks.funStuff.music.pageLink
        },
        {
            "label": TextResources.pageLinks.funStuff.food.label,
            "pageLink": TextResources.pageLinks.funStuff.food.pageLink
        },
        {
            "label": TextResources.pageLinks.funStuff.football.label,
            "pageLink": TextResources.pageLinks.funStuff.football.pageLink
        },
    ]

    return (
        <nav className="navbar-container">
            <NavbarLogo pageLink={TextResources.pageLinks.home.pageLink} />
            <NavbarLink pageLink={TextResources.pageLinks.aboutMe.pageLink} label={TextResources.pageLinks.aboutMe.label}/>
            <NavbarLink pageLink="" label="fun stuff" dropdownItems={funStuffDropdownItems}/>
            <NavbarLink pageLink={TextResources.pageLinks.portfolio.pageLink} label={TextResources.pageLinks.portfolio.label}/>
            <NavbarLink pageLink={TextResources.pageLinks.professional.pageLink} label={TextResources.pageLinks.professional.label}/>
        </nav>
    );
};