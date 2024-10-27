
import React,{useEffect} from 'react'
import {useStore} from '../store/store'
import './HomePage.css'

function HomePage() {
  const { setRecommendedBooks, recommendedBooks } =useStore();

  useEffect(()=>{
    async function fetchBooks(){
      try{
        const response=await fetch('https://openlibrary.org/subjects/fantasy.json?limit=7');
        const data=await response.json();
        setRecommendedBooks(data.works);
        console.log(data)

      }catch(error){
        console.log('Error fetching books:', error);
      }
    };

    fetchBooks();

  },[setRecommendedBooks]);
  return (
    <div className='grid-container'>
    {recommendedBooks.map((book) => (
      <div key={book.key} className='grid-item flex flex-col justify-center items-center'>
        <h3>{book.title}</h3>
       
       
        {book.cover_id && (
          <div className='h-[200px] w-[100px] '>
            <img className='w-[100%] object-cover'
            src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} 
            alt={`${book.title} cover`} 
          />
           <p>{book.authors[0].name}</p>

          </div>
          
        )}
      </div>
    ))}
  </div>
  );
}  

export default HomePage