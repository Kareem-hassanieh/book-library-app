// AuthorBooks.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/store'; // Import Zustand store

interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: string;
}

const AuthorBooks: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { searchedBooks, setSearchedBooks } = useStore();

  useEffect(() => {
    async function fetchBooksByAuthor() {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?author=${name}`);
        const data = await response.json();
        setSearchedBooks(data.docs);
      } catch (error) {
        console.error('Error fetching books by author:', error);
      }
    }

    fetchBooksByAuthor();
  }, [name, setSearchedBooks]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Books by {name}</h1>
      <div className="grid-container">
        {searchedBooks.map((book: Book) => (
          <div key={book.key} className="grid-item flex flex-col items-center justify-between border w-[100%] p-[10px] rounded-lg gap-[10px]">
            {book.cover_i && (
              <div className="h-[270px] w-[180px] overflow-hidden">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={`${book.title} cover`}
                />
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>
            <p className="text-lg text-gray-600">{book.author_name && book.author_name[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorBooks;
