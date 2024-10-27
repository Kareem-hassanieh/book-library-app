
import React, { useState, useEffect } from 'react';
import { useStore } from '../store/store';
import { Link } from 'react-router-dom'; 
import './HomePage.css';

function HomePage() {``
  const { setRecommendedBooks, recommendedBooks, setSearchedBooks, searchedBooks } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchRecommendedBooks() {
      try {
        const response = await fetch('https://openlibrary.org/subjects/fantasy.json?limit=7');
        const data = await response.json();
        setRecommendedBooks(data.works);
      } catch (error) {
        console.log('Error fetching recommended books:', error);
      }
    }

    fetchRecommendedBooks();
  }, [setRecommendedBooks]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`);
      const data = await response.json();
      setSearchedBooks(data.docs);
    } catch (error) {
      console.log('Error searching for books:', error);
    }
  };

  return (
    <>
      <header className='flex justify-between mb-[30px] mt-[30px]'>
        <h1>Online Book Library</h1>
        <div>
          <input 
            type="text" 
            placeholder="Search for books ..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button className='bg-[black] text-white' onClick={handleSearch}>Search</button>
        </div>
        <h2>username</h2>
      </header>

      <div className='grid-container'>
        {searchedBooks.length > 0 ? (
          searchedBooks.map((book) => (
            <div key={book.key} className='grid-item flex flex-col justify-center items-center justify-between border w-[100%] '>
              
              {book.cover_i && (
                <div className='h-[270px] w-[180px] overflow-hidden'>
                  <img 
                    className='w-[100%] h-[100%] object-cover' 
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} 
                    alt={`${book.title} cover`} 
                  />
             
                </div>
              )}
             
              <h3>{book.title}</h3>
              <p>{book.author_name && book.author_name[0]}</p>
              <Link to={`/book/${book.key.split('/').pop()}`} className='btn'>View Details</Link>
          
              
            </div>
          ))
        ) : (
          recommendedBooks.map((book) => (
            <div key={book.key} className='grid-item flex flex-col justify-center items-center border w-[100%] h-[100%]'>
              <h3>{book.title}</h3>
              {book.cover_id && (
                <div className='h-[150px] w-[100px] overflow-hidden'>
                  <img 
                    className='w-[100%] h-[100%] object-cover' 
                    src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} 
                    alt={`${book.title} cover`} 
                  />
                  
                </div>
              )}
              <p>{book.authors[0].name}</p>
                  

                  <Link to={`/book/${book.key.split('/').pop()}`} className='btn'>View Details</Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default HomePage;
