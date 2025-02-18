import { useParams } from "react-router-dom"
import blogs from "../BlogData.json"

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));
  console.log("ID from URL:", id);
  console.log("Blogs JSON:", blogs);
  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="flex justify-center flex-col items-center">
      <img src={blog.image} alt="" className="lg:h-[50vh] h-[40vh] my-4 w-[90vw] lg:w-[75vw] rounded-xl shadow-xl border-[1.5px] border-gray-400" />
      <h1 className="text-center text-3xl font-bold my-2">{blog.title}</h1>
      <p className="px-4 lg:px-8 text-xl">{blog.content}</p>
    </div>
  )
}

export default BlogPage
