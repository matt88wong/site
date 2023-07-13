//Content
import TextResources from '../../Content/TextResources.json';

//Dependencies
import { GetSkillsIcons } from './GetSkillsIcons';

//Style
import '../../css/Features/skillscontent.css';

//Types
import { SkillsContentProps } from "../../Types/Features/SkillsContent";

//OBJECTIVE: Skills content showing thing use a prop to return the appropriate content 
export const SkillsContent = (props: SkillsContentProps) => {
    const { skillArea } = props;

    const skillIcons = GetSkillsIcons("teamwork");

    const getSkillsHeaderText = () => {
        switch(skillArea) {
            case 'languages':
                return TextResources.pageContent.home.rightHandSide.skills.headerText.languages
            case 'frameworks':
                return TextResources.pageContent.home.rightHandSide.skills.headerText.frameworks
            case 'tools':
                return TextResources.pageContent.home.rightHandSide.skills.headerText.tools

        }
    }

    return (
        <div className='skillscontent-container'>
            <h3>{getSkillsHeaderText()}</h3>
            <div className='skillscontent-icons'>
                {skillIcons}
            </div>
        </div>
    );
}