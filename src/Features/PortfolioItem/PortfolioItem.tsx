//Content
import coming_soon from '../../Content/images/coming_soon.png';
import matthew_wong_logo from '../../Content/images/matthew_wong_logo.png';

//Features
import { SkillsIcons } from '../SkillsContent';

//Style
import '../../css/Features/portfolioitem.css';

//Types
import { PortfolioItemInterface } from '../../Types/Features/PortfolioItem';

export const PortfolioItem = (props: PortfolioItemInterface) => {
    const { aboutStatement, desiredIconSet, madeWithStatement, thumbnailName, title} = props;

    const GetThumbnail = () => {
        switch (thumbnailName) {
            case 'coming soon':
                return (<img alt={title} className='portfolio-item-thumbnail' src={coming_soon}/>);
            case 'matthew_wong_logo':
                return (<img alt={title} className='portfolio-item-thumbnail' src={matthew_wong_logo} />);
        }
    }

    return (
        <div className='portfolio-item-container'>
            <div className='portfolio-item-thumbnail-container'>
                {GetThumbnail()}
            </div>
            <div className='portfolio-item-blurb'>
                <h2>
                    {title}
                </h2>
                <p>
                    {aboutStatement}
                </p>
                <p>
                    {madeWithStatement}
                </p>
                <div className='portoflio-item-icons'>
                    {SkillsIcons(desiredIconSet)}
                </div>
            </div>
        </div>
    );
}