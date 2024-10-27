import React from 'react'

function Header() {
  return (
    <header className='flex justify-between'>
      <h1>Online Book library</h1>
      <input type="text" placeholder="Search for books ..."
      ></input>
      <h2>username</h2>
    </header>
  )
}

export default Header