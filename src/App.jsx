/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Blogs from './compoents/Blogs/Blogs'
import Bookmarks from './compoents/Bookmarks/Bookmarks'
import Header from './compoents/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadigTime] = useState(0)
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadigTime(newReadingTime)
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex lg:max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks}
        readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
