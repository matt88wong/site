//Types
import { ButtonProps } from '../../Types/Components/Button';

//Style
import '../../css/Components/button.css';

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
            default: 
                return 'button-regular';
        };
    }
    return (
        <a href={href} target={target} className={getButtonSize() + ' ' + getButtonType()} onClick={onClick}>
            <span className={'button-text'}>{label}</span>
        </a>
    );
};