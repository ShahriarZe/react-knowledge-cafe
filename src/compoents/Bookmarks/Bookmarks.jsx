/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className="w-full md:w-1/3 bg-slate-100 ml-2 rounded-xl pt-4">
            <div className='text-2xl text-center border-2 p-5 rounded-lg mb-5 border-purple-600 '>
                <h3>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center font-semibold">Bookmarked: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;