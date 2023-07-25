//Content
import TextResources from '../../Content/TextResources.json';

//Features
import { Avatar, TopTenTunesSlider } from '../../Features';

//Style
import '../../css/Pages/blog.css';

export const Blog = () => {
    return (
        <div className='blog-container'>
            <p>
                {TextResources.pageContent.blog.leftHandSide.about}
            </p>
            <div className='blog-leftside-column'>
                {TextResources.pageContent.blog.content.tunes.title}
            </div>

            <div className='blog-rightside-column'>
                <TopTenTunesSlider />
            </div>
        </div>
    )
}