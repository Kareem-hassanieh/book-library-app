import React from 'react'

function Header() {
  return (
    <header className='flex justify-between mb-[30px] mt-[30px]'>
      <h1>Online Book library</h1>
      <div>
      <input type="text" placeholder="Search for books ..."
      ></input>
      <button className='bg-[black] text-white'>Search</button>

      </div>
     
      <h2>username</h2>
    </header>
  )
}

export default Header