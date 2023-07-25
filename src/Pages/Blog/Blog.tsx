//Content
import TextResources from '../../Content/TextResources.json';

//Features
import { TopTenTunesSlider } from '../../Features';

//Style
import '../../css/Pages/blog.css';

export const Blog = () => {
    return (
        <div className='blog-container'>
            <p>
                {TextResources.pageContent.blog.content.about}
            </p>
            <TopTenTunesSlider />
        </div>
    )
}