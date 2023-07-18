//Style
import '../../css/Components/button.css';

//Types
import { ButtonProps } from '../../Types/Components/Button';

export const Button = (props : ButtonProps) => {

    const {href, label, onClick, size, target, type} = props;

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

    const getButtonType = () => {
        switch(type) {
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
    return (
        <a href={href} target={target} className={'button-container ' + getButtonSize() + ' ' + getButtonType()} onClick={onClick}>
            <span>{label}</span>
        </a>
    );
};