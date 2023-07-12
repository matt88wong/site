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

    return (
        <div className='icon-container'>
            <a href={url} target='_blank' rel='noreferrer'>
                <img src={GetIcon(iconName)} alt={label} width={getIconSize()}/>
            </a>
            {includeLabelText && <span>{label}</span>}
        </div>
    );

}