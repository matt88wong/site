//Style
import '../../css/Features/blogpost.css';

//Types
import { BlogPostProps } from '../../Types/Features/BlogPost';

export const BlogPost = (props: BlogPostProps) => {
    const { children, title } = props;
    return (
        <div className='blog-post-container'>
            <h1 className='blog-post-header'>
                {title}
            </h1>
            {children}
        </div>
    );
}