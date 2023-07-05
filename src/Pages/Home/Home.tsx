//Dependency components
import { Fade, Slide } from 'react-awesome-reveal';

//Features
import { DownloadCvButton } from '../../Features';

//Content
import TextResources from '../../Content/TextResources.json';

//Style
import '../../css/Pages/home.css';

export const Home = () => {

    //TODO: Constants folder
    const FADEDURATION = 1500;
    const SLIDEDURATION = 1000;

    return (
        <div className="home-container">
            <div className="intro-header-container">
                <Fade duration={FADEDURATION} direction='down'>
                    <p>
                        {TextResources.pageContent.home.intro.title}
                    </p>
                </Fade>
                <Slide duration={SLIDEDURATION} direction='left'>
                    <h1>
                        {TextResources.pageContent.home.intro.nameHeader}
                        <span className="intro-name">{TextResources.pageContent.home.intro.name}</span>
                    </h1>
                </Slide>
                <Slide duration={SLIDEDURATION} direction='right'>
                    <h1>
                        {TextResources.pageContent.home.intro.whatIdoHeader}
                    </h1>
                </Slide>
                <Fade duration={FADEDURATION} direction='up'>
                    <p>
                        {TextResources.pageContent.home.intro.statement}
                    </p>
                </Fade>
            </div>
            <div className="home-content-container">
                <DownloadCvButton/>
            </div>
        </div>
    );
};