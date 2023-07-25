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

    const Languages = () => {
        return (
            <>
                <span className='skills-header'>
                    Languages {TextResources.pageContent.home.rightHandSide.skillsContent.headerText}
                </span>
                <div className='skills-icons'> 
                    {SkillsIcons('languages')}
                </div>
            </>
        )
    }

    const Frameworks = () => {
        return (
            <>
                <span className='skills-header'>
                    Frameworks {TextResources.pageContent.home.rightHandSide.skillsContent.headerText}
                </span>
                <div className='skills-icons'> 
                    {SkillsIcons('frameworks')}
                </div>
            </>
        )
    }

    const Tools = () => {
        return (
            <>
                <span className='skills-header'>
                    Tools {TextResources.pageContent.home.rightHandSide.skillsContent.headerText}
                </span>
                <div className='skills-icons'> 
                    {SkillsIcons('tools')}
                </div>
            </>
        )
    }
        
    const skillsIcons = [Languages(), Frameworks(), Tools()];

    return (
        <div className='skillscontentslider-container'>
            <ContentSlider slides={skillsIcons} />
        </div>
    );
}