import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { bookApi } from '../services/bookService';
import { ISearchBooksApi } from '../types';

export const SearchBooksResults = () => {
    const { title = "", page = "" } = useParams();
    const [searchResult, setSearchResult] = useState<ISearchBooksApi>();
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate(`/search/${title}/${Number(page)+1}`);
    }

    const handlePrevPage = () => {
        if(Number(page)===1){
            return
        }
        navigate(`/search/${title}/${Number(page)-1}`);
    }

    useEffect(() => {
        bookApi.getBooksBySearch(title, page).then(books => {
            setSearchResult(books);
        });
    }, [title, page]);

    return (
        <div>
            <h1>SearchBooksResults</h1>
            <div>
                <button type='button' onClick={handlePrevPage}>Previous Page</button>
                <button type='button' onClick={handleNextPage}>Next Page</button>
            </div>
            <h2>Total search results: {searchResult?.total}</h2>
            <p>Error: {searchResult?.error}</p>
            <p>Current page: {searchResult?.page}</p>
            <ul>
                {searchResult?.books.map(book => {
                    return (
                        <li key={book.isbn13}>
                            <Link to={`/books/${book.isbn13}`}>
                                <h3>{book.title}</h3>
                                <p>{book.subtitle}</p>
                                <p>{book.price}</p>
                                <i>{book.isbn13}</i>
                            </Link>
                        </li>
                    );
                })};
            </ul>
        </div>
    );
};
