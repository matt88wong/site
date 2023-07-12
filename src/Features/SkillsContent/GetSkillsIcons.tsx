//Components
import { Icon } from '../../Components';

//Content
import TextResources from '../../Content/TextResources.json';

export const GetSkillsIcons = (skillArea: 'languages' | 'frameworks' | 'teamwork' | 'tools') => {

    const skillIcons = () => {
        switch(skillArea) {
            case 'languages':
                return (
                    Object.values(TextResources.icons.skills.languages)
                    .map(language => 
                        <Icon 
                            iconName={language.iconName} 
                            includeLabelText 
                            label={language.label} />
                    )
                )
            case 'frameworks':
                return (
                    Object.values(TextResources.icons.skills.frameworks)
                    .map(framework => 
                        <Icon 
                            iconName={framework.iconName} 
                            includeLabelText 
                            label={framework.label} />
                    )
                )
            default: 
                return (
                    Object.values(TextResources.icons.skills.languages)
                    .map(language => 
                        <Icon 
                            iconName={language.iconName} 
                            includeLabelText 
                            label={language.label} />
                )
            )
        }
    }

    return skillIcons();
}