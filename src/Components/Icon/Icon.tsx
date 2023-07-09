//Icon content
import github_logo from '../../Content/icons/github_logo.svg';
import linkedin_logo from '../../Content/icons/linkedin_logo.svg';
import youtube_logo from '../../Content/icons/youtube_logo.svg';
import instagram_logo from '../../Content/icons/instagram_logo.svg';

//Style
import '../../css/Components/icon.css';

//Types
import { IconProps } from '../../Types/Components/Icon';

export const Icon = (props: IconProps) => {
    const { iconName, label, size, url } = props;

    const getIconSize = () => {
        switch(size) {
            case 'large': {
                return '80';
            }
            case 'medium': {
                return '64';
            }
            case 'small': {
                return '32';
            }
            default: 
                return '64';
        };
    }

    const getIcon = () => {
        switch(iconName) {
            case 'github_logo': {
                return github_logo;
            }
            case 'linkedin_logo': {
                return linkedin_logo;
            }
            case 'youtube_logo': {
                return youtube_logo;
            }
            case 'instagram_logo': {
                return instagram_logo;
            }
        };
    }

    return (
        <div className='icon-container'>
            <a href={url} target='_blank' rel='noreferrer'>
                <img src={getIcon()} alt={label} width={getIconSize()}/>
            </a>
        </div>
    );

}