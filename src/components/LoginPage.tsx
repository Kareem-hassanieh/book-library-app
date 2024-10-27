import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate('/home');
  };
  
  return (
    <div 
    className='h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat' 
  style={{ backgroundImage: "url('painting-book-titled-title-title_1083198-3647.avif')" }}>

        <form onSubmit={handleLogin} className=' flex flex-col w-[50%] m-auto justify-center items-center'>
         
      <div className="mb-4 w-[300px]">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email" 
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-6 w-[300px]">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Enter your password" 
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button 
        type="submit" 
        className=" bg-[#7D5F46] text-white py-2 rounded-md transition-colors w-[70px] m-[auto]">
      
        Login
      </button>
    </form>

    </div>
  
  );
}

export default LoginPage;
