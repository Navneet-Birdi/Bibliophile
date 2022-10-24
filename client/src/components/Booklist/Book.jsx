import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import BookModal from '../Modal/BookModal';


const Book = (book) => {
    const [open, setOpen] = useState(false)
  return (
    <div className= "ui grid book-item">
    <div className="four wide column book-item-img">
        <Button basic onClick={() => setOpen(true)}>
        <img src = {book.cover_img} alt = "cover"/>
        </Button>
    </div>
    <div className="book-item-info title">
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
    {open && (

<BookModal
open={open}
setOpen={setOpen}
bookName={book.title}
coverImg={book.cover_img}
description={book.description}
/>
    )}
    
  </div>
  )
}

export default Book