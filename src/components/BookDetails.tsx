// components/BookDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface Book {
  title: string;
  cover_id?: string;
  description?: { value: string }; // Adjust based on the actual API response
}

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = React.useState<Book | null>(null);

  React.useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await response.json();
        console.log(data); // Log the fetched data
        setBook(data);
      } catch (error) {
        console.log('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  return (
    <div>
      {book ? (
        <>
          <h1>{book.title}</h1>
          
          {book.covers && (
            <img 
              src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`} 
              alt={`${book.title} cover`} 
            />
          )}
          <p>{book.description}</p>
         
         
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
