// components/BookDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface Book {
  title: string;
  cover_id?: string;
  description?: { value: string }; 
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
      <div className='flex flex-col'>

      {book ? (
        <>
          <h1 className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent text-4xl text-center mb-[50px]'>{book.title}</h1>
          <div className="flex flex-col md:flex-row">
          {book.covers && (
            <div className='h-[500px] w-[350px] flex justify-center items-center m-auto '>
              <img className='h-[100%] w-[100%] object-cover rounded-lg'
              src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`} 
              alt={`${book.title} cover`} 
            />

            </div>
            
          )}
          <div className='md:w-[50%] flex flex-col m-auto '>
          <p className='mt-[20px]' >{book.description}</p>
          <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white  py-2 px-4 w-[150px] hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-lg ml-[auto] mt-[30px]'>Add to favorites</button>

          </div>
          


          </div>
          
         
         
         
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
