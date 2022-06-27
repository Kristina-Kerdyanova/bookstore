import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { DetailsItem } from "../components/DetailsItem/DetailsItem";
import { Subscribe } from "../components/Subscribe/Subscribe";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { getNewBooksError } from "../store/selectors/booksSelector";
import { getBookDetailsStatus } from "../store/selectors/detailsBookSelector";
import { fetchDetailsBook } from "../store/slices/detailsBookReducer";
import { StyledApp } from "../styles";


export const DetailsBook = () => {
  const status = useAppSelector(getBookDetailsStatus);
  const error = useAppSelector(getNewBooksError);

  const { id = "" } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailsBook(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return (
      <div>
        <h1>WE HAVE SOME PROBLEMS</h1>
        <h2>{error.message}</h2>
        <i>{error.code}</i>
      </div>
    );
  }

  return (
    <StyledApp>
      <ButtonBack />
      <DetailsItem/>
      <Subscribe/>
    </StyledApp>
  );
};
