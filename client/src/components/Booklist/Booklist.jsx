import React from 'react';
import { useGlobalContext } from '../../context';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";



const Booklist = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
      return{
        ...singleBook,
        //removing/works/ to get only id
        id: (singleBook.id).replace("/works/", ""),
        cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/${singleBook.cover_id}-S.jpg` : coverImg
      }
  });
  
  if (loading) return <Loading/>;

  return (
    <section className='booklist'>
      

    </section>
  )
}

export default Booklist