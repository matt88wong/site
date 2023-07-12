//Dependencies
import { GetSkillsIcons } from './GetSkillsIcons';

//Style
import '../../css/Features/skillscontent.css';

//Types
import { SkillsContentProps } from "../../Types/Features/SkillsContent";

//OBJECTIVE: Skills content showing thing use a prop to return the appropriate content 
export const SkillsContent = (props: SkillsContentProps) => {
    const { skillArea } = props;

    const skillIcons = GetSkillsIcons(skillArea);

    return (
        <div className='skillscontent-container'>
            {skillIcons}
        </div>
    );
}