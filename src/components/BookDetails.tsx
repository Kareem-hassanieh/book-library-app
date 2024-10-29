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
          <h1 className='text-center font-bold mb-[30px] text-[30px]'>{book.title}</h1>
          <div class="flex flex-col md:flex-row">
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
          <button className='bg-[black] text-white w-[200px] ml-[auto] p-[10px] rounded-lg'>Add to favorites</button>

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
