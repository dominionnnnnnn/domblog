import React from 'react'
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
  return (
    <div className='border-[1.5px] shadow-xl p-4 w-[80vw] lg:w-[25%] m-4 rounded-2xl'>
      <img src={blog.image} alt="" className='h-[280px] rounded-xl'/>
      <h2 className='text-xl font-bold text-primary mt-4'>{blog.title}</h2>
      <p className='text-text'>{blog.date}</p>
      <Link to={`/blog/${blog.id}`}>Read More</Link>
    </div>
  )
}

export default Blog
