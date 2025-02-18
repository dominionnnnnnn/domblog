import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
  const [openMenu , setOpenMenu] = useState(false);
  return (
    <nav className='flex container w-screen justify-between py-4 px-8 border-2 shadow-lg bg-real sticky top-0'>
        <div className="logo my-auto font-bold text-xl"><span><span className='text-text'>DOM</span><span className='text-primary font-extrabold'>BLOG</span></span></div>
        <div className={`${openMenu? 'show': ''} nav-links my-auto`} id='navLinks'>
            <Link to="/" className='mx-4 text-primary' >Blog</Link>
            <Link to="/writing" className='mx-4 text-primary' >Writing</Link>
            <Link to="/contact" className='mx-4 text-primary' >Contact</Link>
        </div>
        
        <div className="burger-menu">
        <label className="burger" htmlFor="burger">
        <input onClick={() => setOpenMenu((prevState) => !prevState)} type="checkbox" id="burger"/>
        <span></span>
        <span></span>
        <span></span>
        </label>
        </div>
    </nav>
  )
}

export default Navbar
