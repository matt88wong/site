//Content
import TextResources from '../../Content/TextResources.json';

//Dependency components
import { Fade, Slide } from 'react-awesome-reveal';

//Features
import { DownloadCvButton } from '../../Features';
import { SocialMediaIconBar } from '../../Features';

//Style
import '../../css/Pages/home.css';

export const Home = () => {

    //TODO: Constants folder
    const FADEDURATION = 1500;
    const SLIDEDURATION = 1000;

    return (
        <div className="home-container">
            <div className="home-leftside-container">
                <Fade duration={FADEDURATION} direction='down'>
                    <p>
                        {TextResources.pageContent.home.leftHandSide.intro.title}
                    </p>
                </Fade>
                <Slide duration={SLIDEDURATION} direction='left'>
                    <h1>
                        {TextResources.pageContent.home.leftHandSide.intro.nameHeader}
                        <span className="intro-name">{TextResources.pageContent.home.leftHandSide.intro.name}</span>
                    </h1>
                </Slide>
                <Slide duration={SLIDEDURATION} direction='right'>
                    <h1>
                        {TextResources.pageContent.home.leftHandSide.intro.whatIdoHeader}
                    </h1>
                </Slide>
                <Fade duration={FADEDURATION} direction='up'>
                    <p>
                        {TextResources.pageContent.home.leftHandSide.intro.statement}
                    </p>
                </Fade>
                <Fade duration={FADEDURATION} direction='left'>
                    <DownloadCvButton />
                </Fade>
                <SocialMediaIconBar />
            </div>
            <div className="home-rightside-container">
                <div>add photo and content foooo schtuff idk</div>
                <div>skilllzzzzzz with like slideshow carousel and all the logoszzz</div>
            </div>
        </div>
    );
};