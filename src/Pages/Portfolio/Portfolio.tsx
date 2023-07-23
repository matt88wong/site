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
                        aboutStatement={TextResources.pageContent.portfolio.projects.matthewwong.aboutstatement} 
                        desiredIconSet={TextResources.pageContent.portfolio.projects.matthewwong.desiredIconSet} 
                        madeWithStatement={TextResources.pageContent.portfolio.projects.matthewwong.madewithstatement} 
                        thumbnailName={TextResources.pageContent.portfolio.projects.matthewwong.thumbnailName} 
                        title={TextResources.pageContent.portfolio.projects.matthewwong.title} 
                    />
                    <PortfolioItem 
                        aboutStatement={TextResources.pageContent.portfolio.projects.comingsoon.aboutstatement} 
                        desiredIconSet={TextResources.pageContent.portfolio.projects.comingsoon.desiredIconSet} 
                        madeWithStatement={TextResources.pageContent.portfolio.projects.comingsoon.madewithstatement} 
                        thumbnailName={TextResources.pageContent.portfolio.projects.comingsoon.thumbnailName} 
                        title={TextResources.pageContent.portfolio.projects.comingsoon.title} 
                    />
                </div>
            </div>
        </Fade>
    )
}