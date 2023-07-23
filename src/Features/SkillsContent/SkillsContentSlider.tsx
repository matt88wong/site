//Content
import TextResources from '../../Content/TextResources.json';

//Components
import { ContentSlider } from '../../Components/ContentSlider';
import { Icon } from '../../Components';

//Features
import { SkillsIcons } from './SkillsIcons';

//Style
import '../../css/Features/skillscontent.css';

export const SkillsContentSlider = () => {
        
    const skillsIcons = [SkillsIcons('languages'), SkillsIcons('frameworks'), SkillsIcons('tools')];

    return (
        <div className='skillscontentslider-container'>
            <ContentSlider headerText slides={skillsIcons} slideContent={'skillsContent'} />
        </div>
    );
}