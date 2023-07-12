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
                iconName={TextResources.icons.socialMedia.linkedin.iconName}
                label={TextResources.icons.socialMedia.linkedin.labels} 
                url={TextResources.icons.socialMedia.linkedin.url} />
            <Icon 
                iconName={TextResources.icons.socialMedia.github.iconName}
                label={TextResources.icons.socialMedia.github.labels} 
                url={TextResources.icons.socialMedia.github.url} />
            <Icon 
                iconName={TextResources.icons.socialMedia.instagram.iconName}
                label={TextResources.icons.socialMedia.instagram.labels} 
                url={TextResources.icons.socialMedia.instagram.url} />
            <Icon 
                iconName={TextResources.icons.socialMedia.youtube.iconName}
                label={TextResources.icons.socialMedia.youtube.labels} 
                url={TextResources.icons.socialMedia.youtube.url} />
        </div>
    );
};