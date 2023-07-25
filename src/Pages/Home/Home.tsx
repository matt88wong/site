//Components
import { Button } from '../../Components';

//Content
import CV from '../../Content/documents/CV.pdf';
import TextResources from '../../Content/TextResources.json';

//Dependency components
import { Fade, Slide } from 'react-awesome-reveal';

//Features
import { Avatar } from '../../Features';
import { SkillsContentSlider } from '../../Features';
import { SocialMediaIconBar } from '../../Features';

//Style
import '../../css/Pages/home.css';

export const Home = () => {

    const BlogButton = () => {
        return (<Button href={TextResources.pageLinks.blog.pageLink} label={TextResources.buttons.blog.label} type='slide' />);
    };

    const DownloadCvButton = () => {
        return (<Button href={CV} label={TextResources.buttons.cv.label} target='_blank' type='offset' />);
    };

    const PortfolioButton = () => {
        return (<Button href={TextResources.pageLinks.portfolio.pageLink} label={TextResources.buttons.portfolio.label} type='fill' />);
    };

    return (
        <div className="home-container">
            <div className="home-leftside-column">
                <Fade duration={1600}>
                    <p>
                        {TextResources.pageContent.home.leftHandSide.intro.title}
                    </p>
                </Fade>
                <Slide duration={2400}>
                    <h1>
                        {TextResources.pageContent.home.leftHandSide.intro.nameHeader}
                        <span className='name-highlight'>{TextResources.pageContent.home.leftHandSide.intro.name}</span>
                    </h1>
                    <h1>
                        {TextResources.pageContent.home.leftHandSide.intro.whatIdoHeader}
                    </h1>
                </Slide>
                <Fade duration={3200}>
                    <p>
                        {TextResources.pageContent.home.leftHandSide.intro.careerStatement}
                        <br/>
                        {TextResources.pageContent.home.leftHandSide.intro.outsideOfDevelopmentLine1}
                        <a className='hidden-korok' rel='noreferrer' href={TextResources.pageContent.home.leftHandSide.intro.korokTreat} target='_blank'>
                            {TextResources.pageContent.home.leftHandSide.intro.koroks}
                        </a>
                        {TextResources.pageContent.home.leftHandSide.intro.outsideOfDevelopmentLine2}
                    </p>
                    <div className='home-leftside-buttons'>
                        {DownloadCvButton()}
                        {PortfolioButton()}
                        {BlogButton()}
                    </div>
                    <SocialMediaIconBar />
                </Fade>
            </div>
            <div className="home-rightside-column">
                <Fade duration={1600} direction='down'>
                    <Avatar />
                    <SkillsContentSlider />
                </Fade>
            </div>
        </div>
    );
};