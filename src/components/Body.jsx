import React from 'react'
import BlogFeatured from './BlogFeatured'
import Blog from './Blog'
import blogs from '../BlogData.json'
const Body = () => {
  return (
    <div>
      <BlogFeatured blog={blogs[0]}/>
      <header className='mt-8 text-3xl font-bold text-primary mx-[10%]'>Latest Blog Posts</header>
      <div className="flex justify-center flex-wrap lg:flex-nowrap">
      {blogs.slice(1).map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
        </div>
    </div>
  )
}

export default Body
