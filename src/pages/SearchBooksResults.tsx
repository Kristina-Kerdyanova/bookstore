// import { title } from 'process';
// import { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'
// import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
// import { getSearchBooks, getSearchError, getSearchPage, getSearchStatus, getSearchTotal } from '../store/selectors/searchSelector';
// import { fetchSearch } from '../store/slices/searchReducer';



// export const SearchBooksResults = () => {
//     const books = useAppSelector(getSearchBooks);
//     const status = useAppSelector(getSearchStatus);
//     const error = useAppSelector(getSearchError);
//     const page = useAppSelector(getSearchPage);
//     const total = useAppSelector(getSearchTotal);

//     const dispatch = useAppDispatch();

//     const navigate = useNavigate();

//     const handleNextPage = () => {
//         navigate(`/search/${title}/${Number(page) + 1}`);
//     }

//     const handlePrevPage = () => {
//         if (Number(page) === 1) {
//             return
//         }
//         navigate(`/search/${title}/${Number(page) - 1}`);
//     }

//     useEffect(() => {
//         if (status === "idle") {
//             dispatch(fetchSearch());
//         }
//     }, [dispatch, status]);

//     if (status === 'loading') {
//         return <div>Loading...</div>
//     };

//     if (status === 'error') {
//         return <div>
//             <h1>WE HAVE SOME PROBLEMS</h1>
//             <h2>{error.message}</h2>
//             <i>{error.code}</i>
//         </div>
//     };

//     return (
//         <div>
//             <h1>SearchBooksResults</h1>
//             <div>
//                 <button type='button' onClick={handlePrevPage}>Previous Page</button>
//                 <button type='button' onClick={handleNextPage}>Next Page</button>
//             </div>
//             <h2>Total search results: {total}</h2>
//             <p>Error: {error}</p>
//             <p>Current page: {page}</p>
//             <ul>
//                 {books.map(book => {
//                     return (
//                         <li key={book.isbn13}>
//                             <Link to={`/books/${book.isbn13}`}>
//                                 <img src={book.image} alt={book.title} />
//                                 <h3>{book.title}</h3>
//                             </Link>
//                             <p>{book.subtitle}</p>
//                             <p>{book.price}</p>
//                         </li>
//                     );
//                 })};
//             </ul>
//         </div>
//     );
// };

import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { bookApi } from '../services/bookService';
import { ISearchBooksApi } from '../store/types';


export const SearchBooksResults = () => {
    const { title = "", page = "" } = useParams();
    const [searchResult, setSearchResult] = useState<ISearchBooksApi>();
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate(`/search/${title}/${Number(page) + 1}`);
    }

    const handlePrevPage = () => {
        if (Number(page) === 1) {
            return
        }
        navigate(`/search/${title}/${Number(page) - 1}`);
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
                                <img src={book.image} alt={book.title} />
                                <h2>{book.title}</h2>
                            </Link>
                            <p> {book.subtitle}</p>
                            <p>{book.price}</p>
                        </li>
                    );
                })};
            </ul>
        </div>
    );
};
