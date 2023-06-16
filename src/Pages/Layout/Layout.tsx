import react from 'react';
//Style
import '../../css/Pages/layout.css';

//Components
import { Navbar } from '../../Components/Navbar';

export const Layout = () => {

    return (
        <div className="layout-container">
            <Navbar/>
        </div>
    );
};