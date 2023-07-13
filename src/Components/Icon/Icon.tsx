//Dependencies
import { GetIcon } from './GetIcon';

//Style
import '../../css/Components/icon.css';

//Types
import { IconProps } from '../../Types/Components/Icon';

export const Icon = (props: IconProps) => {
    const { iconName, includeLabelText, label, size, url } = props;

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

    if (url) {
        return (
            <div className='icon-hover icon-container'>
                <a href={url} target='_blank' rel='noreferrer'>
                    <img className='icon-image' src={GetIcon(iconName)} alt={label} height={getIconSize()} width={getIconSize()}/>
                    {includeLabelText && <span className='icon-label-text'>{label}</span>}
                </a>
            </div>
        );
    }

    return (
        <div className='icon-container'>
            <img className='icon-image' src={GetIcon(iconName)} alt={label} height={getIconSize()} width={getIconSize()}/>
            {includeLabelText && <span className='icon-label-text'>{label}</span>}
        </div>
    );

}