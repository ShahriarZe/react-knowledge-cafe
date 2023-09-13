import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    const { title, cover, author, author_img, reading_time, posted_date,hashtags } = blog;
    return (
        <div className='mb-20 border-2 border-purple-600 rounded-lg p-4'>
            <img className='mb-8 w-full' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'> {author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}Mins</span>
                    <button onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-xl text-red-400'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className='text-3xl font-bold mb-2'>Title:{title}</h3>
            <div className='flex gap-2'>
            <p>{hashtags[0]}</p> <p>{hashtags[1]}</p>
            </div>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-500 font-bold underline mt-2'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;