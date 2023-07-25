//Components
import { PortfolioItem } from '../../Features';

//Content
import TextResources from '../../Content/TextResources.json';

//Dependency components
import { Fade } from 'react-awesome-reveal';

//Features
import { Avatar } from '../../Features';

//Style
import '../../css/Pages/portfolio.css';

export const Portfolio = () => {
    return (
        <Fade duration={1600}>
            <div className='portfolio-container'>
                <Avatar />
                <h1>{TextResources.pageContent.portfolio.title}</h1>
                <div className='portfolio-items'>
                    <PortfolioItem 
                        aboutStatement={TextResources.pageContent.portfolio.projects.matthewWong.aboutStatement} 
                        desiredIconSet={TextResources.pageContent.portfolio.projects.matthewWong.desiredIconSet} 
                        madeWithStatement={TextResources.pageContent.portfolio.projects.matthewWong.madeWithStatement} 
                        thumbnailName={TextResources.pageContent.portfolio.projects.matthewWong.thumbnailName} 
                        title={TextResources.pageContent.portfolio.projects.matthewWong.title} 
                    />
                    <PortfolioItem 
                        aboutStatement={TextResources.pageContent.portfolio.projects.comingSoon.aboutStatement} 
                        desiredIconSet={TextResources.pageContent.portfolio.projects.comingSoon.desiredIconSet} 
                        madeWithStatement={TextResources.pageContent.portfolio.projects.comingSoon.madeWithStatement} 
                        thumbnailName={TextResources.pageContent.portfolio.projects.comingSoon.thumbnailName} 
                        title={TextResources.pageContent.portfolio.projects.comingSoon.title} 
                    />
                </div>
            </div>
        </Fade>
    )
}