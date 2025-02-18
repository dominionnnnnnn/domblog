import Blog from "../components/Blog";
import blog1 from '../assets/blog1.png';
import coding from '../assets/coding.jpg';
import school from '../assets/csc.jpg';
import rct from '../assets/react.jpg';
import blogs from "../BlogData.json"
const WritingPage = () => {


  return (
    <>
      <div className="flex justify-center flex-wrap">
       {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  )
}

export default WritingPage
