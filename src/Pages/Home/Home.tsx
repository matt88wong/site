//Content
import TextResources from '../../Content/TextResources.json';

//Dependency components
import { Fade, Slide } from 'react-awesome-reveal';

//Features
import { DownloadCvButton } from '../../Features';
import { SkillsContent } from '../../Features';
import { SocialMediaIconBar } from '../../Features';

//Style
import '../../css/Pages/home.css';

export const Home = () => {

    //TODO: Constants folder
    const FADEDURATION = 1500;
    const SLIDEDURATION = 1000;

    return (
        <div className="home-container">
            <div className="home-leftside-column">
                <Fade duration={FADEDURATION} direction='down'>
                    <p>
                        {TextResources.pageContent.home.leftHandSide.intro.title}
                    </p>
                </Fade>
                <Slide duration={SLIDEDURATION} direction='left'>
                    <h1>
                        {TextResources.pageContent.home.leftHandSide.intro.nameHeader}
                        <span className='name-highlight'>{TextResources.pageContent.home.leftHandSide.intro.name}</span>
                    </h1>
                </Slide>
                <Slide duration={SLIDEDURATION} direction='right'>
                    <h1>
                        {TextResources.pageContent.home.leftHandSide.intro.whatIdoHeader}
                    </h1>
                </Slide>
                <Fade duration={FADEDURATION} direction='up'>
                    <p>
                        {TextResources.pageContent.home.leftHandSide.intro.careerStatement}
                        <br/>
                        {TextResources.pageContent.home.leftHandSide.intro.outsideOfDevelopmentLine1}
                        <a className='hidden-korok' rel='noreferrer' href={TextResources.pageContent.home.leftHandSide.intro.korokTreat} target='_blank'>
                            {TextResources.pageContent.home.leftHandSide.intro.koroks}
                        </a>
                        {TextResources.pageContent.home.leftHandSide.intro.outsideOfDevelopmentLine2}
                    </p>
                </Fade>
                <Fade duration={FADEDURATION} direction='left'>
                    <DownloadCvButton />
                </Fade>
                <SocialMediaIconBar />
            </div>
            <div className="home-rightside-column">
                <SkillsContent skillArea='languages' />
            </div>
        </div>
    );
};