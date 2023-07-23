//Components
import { Icon } from '../../Components';

//Content
import TextResources from '../../Content/TextResources.json';

//Style
import '../../css/Features/skillscontent.css';

export const SkillsIcons = (desiredIconSet: string) => {

    const skillIconTextResources = TextResources.icons.skills

    //TODO: HARD CODED FOR NOW CHANGE IT UP LATER LOL
    const GetIcons = () => {
        switch (desiredIconSet) {
            case 'matthewwong':
                return (
                    <>
                        <Icon 
                            iconName={skillIconTextResources.languages.css.iconName} 
                            includeLabelText 
                            label={skillIconTextResources.languages.css.label} />
                        <Icon 
                            iconName={skillIconTextResources.languages.html.iconName} 
                            includeLabelText 
                            label={skillIconTextResources.languages.html.label} />
                        <Icon 
                            iconName={skillIconTextResources.languages.typescript.iconName} 
                            includeLabelText 
                            label={skillIconTextResources.languages.typescript.label} />
                        <Icon 
                            iconName={skillIconTextResources.frameworks.react.iconName} 
                            includeLabelText 
                            label={skillIconTextResources.frameworks.react.label} />
                        <Icon 
                            iconName={skillIconTextResources.frameworks.sass.iconName} 
                            includeLabelText 
                            label={skillIconTextResources.frameworks.sass.label} />
                        <Icon 
                            iconName={skillIconTextResources.tools.visualstudiocode.iconName} 
                            includeLabelText 
                            label={skillIconTextResources.tools.visualstudiocode.label} />
                    </>
                )
            case 'languages':
                return (
                    Object.values(TextResources.icons.skills.languages)
                        .map(language => 
                            <Icon 
                                iconName={language.iconName} 
                                includeLabelText 
                                label={language.label} />));
            case 'frameworks':
                return (
                    Object.values(TextResources.icons.skills.frameworks)
                        .map(framework => 
                            <Icon 
                                iconName={framework.iconName} 
                                includeLabelText 
                                label={framework.label} />));
            case 'tools':
                return (
                    Object.values(TextResources.icons.skills.tools)
                        .map(tool => 
                            <Icon 
                                iconName={tool.iconName} 
                                includeLabelText 
                                label={tool.label} />));
        }
    };

    return GetIcons();
}