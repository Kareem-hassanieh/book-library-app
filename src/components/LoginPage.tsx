import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login validation logic here (if needed)
    
    // On successful login, redirect to home page
    navigate('/home');
  };
  
  return (
    <form onSubmit={handleLogin} className='flex flex-col w-[50%] m-auto justify-center items-center'>
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
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors w-[70px] m-[auto]">
      
        Login
      </button>
    </form>
  );
}

export default LoginPage;
