import React from 'react';
import {Link} from 'react-router-dom';


const Book = (book) => {
  return (
    <div class="ui grid" className='book-item'>
    <div class="four wide column" className='book-item-img'>
        <img src = {book.cover_img} alt = "cover"/>
    </div>
    <div classname="book-item-info title">
    <Link to = {`/book/${book.id}`} {...book}>
        <div className='book-item-info-item'>
            <span>{book.title}</span>
        </div>
    </Link>
    <div className='book-item-info-item author'>
        <span className='author'>Author: </span>
        <span>{book.author?.join(",")}</span>
    </div>
    <div className='book-item-info-item edcount'>
        <span className='author'>Total Editions: </span>
        <span>{book.edition_count}</span>
    </div>
    <div className='book-item-info-item pbyear'>
        <span className='author'>First Publish Year: </span>
        <span>{book.first_publish_year}</span>
    </div>
  </div>
  </div>
  )
}

export default Book