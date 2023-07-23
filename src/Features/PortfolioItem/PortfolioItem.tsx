//Features
import { SkillsIcons } from '../SkillsContent';

//Style
import '../../css/Features/portfolioitem.css';

//Types
import { PortfolioItemInterface } from '../../Types/Features/PortfolioItem';

export const PortfolioItem = (props: PortfolioItemInterface) => {
    const { aboutStatement, desiredIconSet, madeWithStatement, thumbnailName, title} = props;

    const GetThumbnail = () => {
        if (thumbnailName === 'coming soon')
            return (<div className='coming-soon'/>);
    }

    //Design be thumbnail, below a title, below a statement, below a made with
    return (
        <div className='portfolio-item-container'>
            <div>
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