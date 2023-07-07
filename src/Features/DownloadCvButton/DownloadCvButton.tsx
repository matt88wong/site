//Components
import { Button } from '../../Components';

//Content
import CV from '../../Content/documents/CV.pdf';

export const DownloadCvButton = () => {
    return (<Button href={CV} label='View my CV' target='_blank' type='offset' />);
};