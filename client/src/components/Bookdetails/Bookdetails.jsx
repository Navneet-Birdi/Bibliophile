import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import {FaArrowLeft} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import auth from '../../utils/auth';

const URL = "https://www.googleapis.com/books/v1/volumes/";


const Bookdetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
          const response = await fetch(`${URL}${id}`);
          const data = await response.json();

          if (data){
            const {volumeInfo: {description, title, authors}, } = data;
            const covers = data.volumeInfo.imageLinks?.thumbnail;
            const newBook = {
              author: authors[0],
              description: description ? description.value : "No Description Found",
              title: title,
              cover_img: covers ? covers : coverImg,
            };
            setBook(newBook);
          }else{
            setBook(null);
          }
          setLoading(false);
      }catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

if (loading) return <Loading/>;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='back'> Go Back</span>
        </button>
        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.cover_img} alt = "cover img"/>
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='title'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span className='description'>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='places'>Author:</span>
              <span className='text-italic'>{book?.author}</span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Bookdetails