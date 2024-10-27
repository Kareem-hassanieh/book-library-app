import React, { useState, useEffect } from 'react';
import { useStore } from '../store/store';
import './HomePage.css';

function HomePage() {
  const { setRecommendedBooks, recommendedBooks, setSearchedBooks, searchedBooks } = useStore();
  const [searchQuery, setSearchQuery] = useState(''); // Step 2.1: State to track search input

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

  // Step 2.2: Function to handle search API call
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`);
      const data = await response.json();
      setSearchedBooks(data.docs); // Save fetched books to Zustand store
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
            onChange={(e) => setSearchQuery(e.target.value)} // Step 2.1: Track input change
          />
          <button className='bg-[black] text-white' onClick={handleSearch}>Search</button>
        </div>
        <h2>username</h2>
      </header>

      <div className='grid-container'>
       
        {searchedBooks.length > 0 ? (
          searchedBooks.map((book) => (
            <div key={book.key} className='grid-item flex flex-col justify-center items-center'>
              <h3>{book.title}</h3>
              {book.cover_i && (
                <div className='h-[200px] w-[100px]'>
                  <img 
                    className='w-[100%] object-cover' 
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} 
                    alt={`${book.title} cover`} 
                  />
                  <p>{book.author_name && book.author_name[0]}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          recommendedBooks.map((book) => (
            <div key={book.key} className='grid-item flex flex-col justify-center items-center'>
              <h3>{book.title}</h3>
              {book.cover_id && (
                <div className='h-[200px] w-[100px]'>
                  <img 
                    className='w-[100%] object-cover' 
                    src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} 
                    alt={`${book.title} cover`} 
                  />
                  <p>{book.authors[0].name}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default HomePage;
