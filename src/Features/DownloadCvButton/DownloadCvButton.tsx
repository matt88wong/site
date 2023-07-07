//Components
import { Button } from '../../Components';

//Content
import CV from '../../Content/documents/CV.pdf';

export const DownloadCvButton = () => {
    return (<Button href={CV} target='_blank' style='offset' label='View my CV' />);
};