import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-10">
      <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
        ✨ Form Builder
      </h1>
      <Link to="/form/create">
        <button className="mt-4 sm:mt-0 text-indigo-600 font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
          ➕ Create Form
        </button>
      </Link>
    </header>
  )
}

export default Header;