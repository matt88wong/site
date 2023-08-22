//Content
import TextResources from '../../Content/TextResources.json';

//Features
import { BlogPost, TopTenTunesSlider } from '../../Features';

//Style
import '../../css/Pages/blog.css';

export const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog-header'>
                <h1>
                    {TextResources.pageContent.blog.content.title}
                </h1>
                {/* <p>
                    {TextResources.pageContent.blog.content.about}
                </p> */}
            </div>
            <TopTenTunesSlider />
        </div>
    )
}