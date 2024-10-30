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
    style={{ backgroundImage: "url('pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')" }}>

      <form onSubmit={handleLogin} className=' flex flex-col w-[50%] m-auto justify-center items-center'>

        <div className="mb-4 w-[300px]">
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
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
          <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Password</label>
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
          className=" bg-gradient-to-r from-blue-500 to-purple-500 text-white  py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ml-[auto]">

          Login
        </button>
      </form>

    </div>

  );
}

export default LoginPage;
