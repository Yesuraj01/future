import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ toggle }) => {
  return (
<>
    <nav className="bg-gray-300">
  <div className="flex justify-between items-center bg-white py-6 lg:px-40 md:px-20 px-10">
    <div className="text-lg text-red-500 font-semibold hover:text-black-500 transition duration-200 cursor-pointer">
      <Link to="/"><h4>Just Explore</h4></Link>
    </div>
    <ul className="lg:flex hidden items-center space-x-10">
      <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer"><Link to="/">Home</Link></li>
      <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer"><Link to="/menu">Menu</Link></li>
      <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer"><Link to="/about">About</Link></li>
      <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer"><Link to="/contact">Contact</Link></li>
      <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer"> <Link to="/tour-list">Tour</Link></li>
      <li className="hover:text-red-500 transition duration-200 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      </li>
      <li className="hover:text-red-500 transition duration-200 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </li>
    </ul>
    <div className="lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  </div>
</nav>
    
    </>
  );
};

export default NavBar;
