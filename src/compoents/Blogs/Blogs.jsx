import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-full md:w-2/3">
            <h2 className="text-3xl text-center font-semibold mb-2">Blogs:{blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}>
                    </Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;