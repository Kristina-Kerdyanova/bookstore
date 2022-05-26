import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { bookApi } from '../services/bookService';
import { IBookDetailsApi } from '../types';

export const DetailsBook = () => {

    const { id = "" } = useParams();
    const [detailsBook, setDetailsBook] = useState<IBookDetailsApi>();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        bookApi.getBookDetails(id).then(book => {
            setDetailsBook(book);
        })
    }, [id]);
    return (
        <div>
            <button
                type='button'
                onClick={handleBack}
            >
                Back
            </button>
            <h1>{detailsBook?.title ? detailsBook.title : "No Title"}</h1>
            <h1>{detailsBook?.subtitle}</h1>
            <p>{detailsBook?.price}</p>
            <p>{detailsBook?.desc}</p>
            <p>{detailsBook?.rating}</p>
        </div>
    )
}
