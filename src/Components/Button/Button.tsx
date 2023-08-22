//Dependencies
import { Link } from 'react-router-dom';

//Style
import '../../css/Components/button.css';

//Types
import { ButtonProps } from '../../Types/Components/Button';

export const Button = (props : ButtonProps) => {

    const {href, label, onClick, size, target, styleType, type} = props;

    const getButtonSize = () => {
        switch(size) {
            case 'large': {
                return 'button-size-large';
            }
            case 'medium': {
                return 'button-size-medium';
            }
            case 'small': {
                return 'button-size-small';
            }
            default: 
                return 'button-size-medium';
        };
    }

    const getButtonStyleType = () => {
        switch(styleType) {
            case 'regular': {
                return 'button-regular';
            }
            case 'offset': {
                return 'button-offset';
            }
            case 'fill': {
                return 'button-fill';
            }
            case 'slide': {
                return 'button-slide'
            }
            default: 
                return 'button-regular';
        };
    }

    if (type === 'link') {
        return (
            <Link className={'button-container ' + getButtonSize() + ' ' + getButtonStyleType()} to={href ? href : ''}>
                {label}
            </Link>
        );
    }

    return (
        <a href={href} target={target} className={'button-container ' + getButtonSize() + ' ' + getButtonStyleType()} onClick={onClick}>
            <span>{label}</span>
        </a>
    );
};