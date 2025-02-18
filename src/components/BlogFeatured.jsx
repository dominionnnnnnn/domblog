import React from 'react'
import { Link } from 'react-router-dom'

const BlogFeatured = ({ blog }) => {
  return (
    <div className='w-screen flex justify-center'>
      <div className='mt-8 blogf w-[90vw] lg:w-[80%] rounded-xl px-8 pb-4'>
        <h2 className='font-bold text-2xl text-white mt-[120px] '>{blog.title}</h2>
        <p className='text-white  mt-2 mb-2'>{blog.date}</p>
        <Link className='text-white ' to={`/blog/${blog.id}`}>Read More</Link>
      </div>
    </div>
  )
}

export default BlogFeatured
