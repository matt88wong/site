import react from 'react';
//Style
import '../../css/Components/navbar.css';


//Props
interface NavbarLinkProps {
    title: string;
}

const NavbarLink = (props: NavbarLinkProps) => {
    return (
        <div className="navbar-link">
            <a>{props.title}</a>
        </div>
    );
};

export default NavbarLink;