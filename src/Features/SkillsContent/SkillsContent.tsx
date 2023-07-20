//Content
import TextResources from '../../Content/TextResources.json';

//Components
import { ContentSlider } from '../../Components/ContentSlider';
import { Icon } from '../../Components';

//Style
import '../../css/Features/skillscontent.css';

export const SkillsContent = () => {
    let skillArea = 'languages';

    const languageSkills = Object.values(TextResources.icons.skills.languages)
            .map(language => 
                <Icon 
                    iconName={language.iconName} 
                    includeLabelText 
                    label={language.label} />);

    const frameworkSkills = Object.values(TextResources.icons.skills.frameworks)
            .map(framework => 
                <Icon 
                    iconName={framework.iconName} 
                    includeLabelText 
                    label={framework.label} />);
        
    const skillIcons = [languageSkills, frameworkSkills];

    return (
        <div className='skillscontent-container'>
            <ContentSlider headerText slides={skillIcons} slideContent={'skillsContent'} />
        </div>
    );
}