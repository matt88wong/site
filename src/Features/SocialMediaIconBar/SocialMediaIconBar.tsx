//Components
import { Icon } from "../../Components";

//Content
import TextResources from '../../Content/TextResources.json';

//Style
import '../../css/Features/socialmediaiconbar.css';


export const SocialMediaIconBar = () => {
    return (
        <div className='socialmediaiconbar-container'>
            <Icon 
                iconName={TextResources.pageContent.home.leftHandSide.socialMediaIcons.iconName.linkedin}
                label={TextResources.pageContent.home.leftHandSide.socialMediaIcons.labels.linkedin} 
                url={TextResources.pageContent.home.leftHandSide.socialMediaIcons.links.linkedin} />
            <Icon
                iconName={TextResources.pageContent.home.leftHandSide.socialMediaIcons.iconName.github}
                label={TextResources.pageContent.home.leftHandSide.socialMediaIcons.labels.github}  
                url={TextResources.pageContent.home.leftHandSide.socialMediaIcons.links.github} />
            <Icon
                iconName={TextResources.pageContent.home.leftHandSide.socialMediaIcons.iconName.instagram}
                label={TextResources.pageContent.home.leftHandSide.socialMediaIcons.labels.instagram} 
                url={TextResources.pageContent.home.leftHandSide.socialMediaIcons.links.instagram} />
            <Icon 
                iconName={TextResources.pageContent.home.leftHandSide.socialMediaIcons.iconName.youtube}
                label={TextResources.pageContent.home.leftHandSide.socialMediaIcons.labels.youtube} 
                url={TextResources.pageContent.home.leftHandSide.socialMediaIcons.links.youtube} />
        </div>
    );
};