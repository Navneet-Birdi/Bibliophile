import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("Search...");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const fetchBooks = useCallback(async() => {
            setLoading(true);
            try{
                const response = await fetch(`${URL}${searchTerm}`);
                const data = await response.json();
                //console.log(data);
                const {items} = data;
                //console.log(items);
                if (items){
                    const newBooks = items.slice(0,20).map(
                        (bookSingle) => {
                            const {id} = bookSingle;

                            const author = bookSingle.volumeInfo.authors;
                            const title = bookSingle.volumeInfo.title;
                            const cover_img = bookSingle.volumeInfo.imageLinks?.thumbnail || ''

                            return{
                                id:id,
                                author:author,
                                title:title,
                                cover_img
                            }
                        }
                    );

                    setBooks(newBooks);
                    if(newBooks.length > 1){
                        setResultTitle("Your Search Result");
                    }
                    else{
                        setResultTitle("No Search Result Found!!")
                    }
                }else{
                    setBooks([]);
                    setResultTitle("No Search Result Found!!");
                }
                setLoading(false);

            } catch(error){
                console.log(error);
                setLoading(false);
            }
    }, [searchTerm]);
    useEffect(
        () => {
            fetchBooks();
        }, [searchTerm, fetchBooks]
    );

    return(
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};