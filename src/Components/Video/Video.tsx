//Style
import '../../css/Components/video.css';

//Types
import { VideoProps } from '../../Types/Components/Video';

//TODO: should be named iframe or media or something lol
export const Video = (props: VideoProps) => {
    const { type, url } = props;

    const GetIFrameAllow = () => {
        switch(type) {
            case 'spotify': 
                return 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
            case 'youtube': 
                return 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        }
    }

    return (
        <iframe 
            className={`video video-height-${type}`}
            src={url}
            title={type}
            allow={GetIFrameAllow()}
            allowFullScreen
        />
    )
}