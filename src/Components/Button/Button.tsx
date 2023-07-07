//Types
import { ButtonProps } from '../../Types/Components/Button';

//Style
import '../../css/Components/button.css';

export const Button = (props : ButtonProps) => {

    const {label, onClick, size, style} = props;

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

    const getButtonStyle = () => {
        switch(style) {
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
        <button className={getButtonSize() + ' ' + getButtonStyle()} onClick={onClick}>
            <span className={'button-text'}>{label}</span>
        </button>
    );
};