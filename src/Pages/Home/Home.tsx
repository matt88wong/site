//Components
import { Fade, Slide } from 'react-awesome-reveal';

//Content
import TextResources from '../../Content/TextResources.json';

//Style
import '../../css/Pages/home.css';

export const Home = () => {

    const fadeDuration = 1500;
    const slideDuration = 1000;


    return (
        <div>
            <div className="intro-header-container">
                <Fade duration={fadeDuration} direction='down'>
                    <p>
                        {TextResources.pageContent.home.intro.title}
                    </p>
                </Fade>
                <Slide duration={slideDuration} direction='left'>
                    <h1>
                        {TextResources.pageContent.home.intro.nameHeader}
                        <span className="intro-name">{TextResources.pageContent.home.intro.name}</span>
                    </h1>
                </Slide>
                <Slide duration={slideDuration} direction='right'>
                    <h1>
                        {TextResources.pageContent.home.intro.whatIdoHeader}
                    </h1>
                </Slide>
                <Fade duration={fadeDuration} direction='up'>
                    <p>
                        {TextResources.pageContent.home.intro.statement}
                    </p>
                </Fade>
            </div>
        </div>
    );
};