//Content
import matthew_wong_logo from '../../Content/images/matthew_wong_logo.png';

//Style
import '../../css/Features/logo.css';

//Types
import { LogoProps } from '../../Types/Features/Logo';

export const Logo = (props: LogoProps) => {
    const { size } = props;

    return (
        <div className={`logo-container ${size === 'small' ? 'logo-small' : 'logo-large'}`}>
            <img alt='Matthew Wong logo' src={matthew_wong_logo} />
        </div>
    );
}