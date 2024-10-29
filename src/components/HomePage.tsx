
import React, { useState, useEffect } from 'react';
import { useStore } from '../store/store';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {

  const { setRecommendedBooks, recommendedBooks, setSearchedBooks, searchedBooks } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchRecommendedBooks() {
      try {
        const response = await fetch('https://openlibrary.org/subjects/love.json?limit=7');
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
      <header className="flex justify-between items-center mb-8  p-4 bg-gray-100  rounded-lg gap-[10px]">
        <h1 className="text-3xl font-bold text-gray-800"> Library</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for books ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <h2 className="text-xl italic text-gray-600">"Readers are leaders."</h2>
      </header>


      <div className='grid-container'>
        {searchedBooks.length > 0 ? (
          searchedBooks.map((book) => (
            <div key={book.key} className='grid-item flex flex-col items-center justify-between border w-[100%] p-[10px] rounded-lg gap-[10px]'>

              {book.cover_i && (
                <div className='h-[270px] w-[180px] overflow-hidden'>
                  <img
                    className='w-[100%] h-[100%] object-cover'
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={`${book.title} cover`}
                  />

                </div>
              )}
              <div className='flex flex-col justify-center items-center gap-[2px] w-[100%]'>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>


                <p className="text-lg text-gray-600">
                  <Link to={`/author/${book.author_name && book.author_name[0]}`}>
                    {book.author_name && book.author_name[0]}
                  </Link>
                </p>

                <Link to={`/book/${book.key.split('/').pop()}`} className='btn ml-[auto] bg-[black] text-white p-[7px] rounded-xl mt-[10px]'>View Details</Link>
              </div>



            </div>
          ))
        ) : (
          recommendedBooks.map((book) => (
            <div key={book.key} className='grid-item flex flex-col items-center justify-between border w-[100%] p-[10px] rounded-lg gap-[10px]'>

              {book.cover_id && (
                <div className='h-[270px] w-[180px] overflow-hidden'>
                  <img
                    className='w-[100%] h-[100%] object-cover'
                    src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                    alt={`${book.title} cover`}
                  />

                </div>
              )}
              <div className='flex flex-col justify-center items-center gap-[2px] w-[100%]'>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>
                <p className="text-lg text-gray-600">{book.author_name && book.author_name[0]}</p>

                <Link to={`/book/${book.key.split('/').pop()}`} className='btn ml-[auto] bg-[black] text-white p-[7px] rounded-xl mt-[10px]'>View Details</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default HomePage;
