//Components
import { ContentSlider, Video } from '../../Components';

//Content
import TextResources from '../../Content/TextResources.json';

//Features
import { BlogPost } from './BlogPost';

//Style
import '../../css/Features/blogpost.css';

export const TopTenTunesSlider = () => {
    const slides = Object.values(TextResources.pageContent.blog.content.tunes.topTen).map(tune => 
        <>
            <div className='blog-post-grid'>
                <div className='blog-post-left-column'>
                    <h2>
                        {tune.songTitle}
                    </h2>
                    <h3>
                        <i>{tune.songRecord} - {tune.songArtist}</i> 
                    </h3>
                    <h3>
                        {TextResources.pageContent.blog.content.tunes.genreText} {tune.genre}
                    </h3>
                    <Video type='spotify' url={tune.spotifyLink}/>
                    <p>
                        {tune.about}
                    </p>
                </div>
                <div className='blog-post-right-column'>
                    <Video type='youtube' url={tune.videoLink}/>
                </div>
            </div>
        </>
    );

    return (
        <BlogPost title={TextResources.pageContent.blog.content.tunes.title}>
            <ContentSlider mobileDots slides={slides} />
        </BlogPost>
    );
}