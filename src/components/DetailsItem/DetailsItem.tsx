import { Like, Cart, BlackStar } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getNewBooksError } from "../../store/selectors/booksSelector";
import {
  getBookDetails,
  getBookDetailsStatus,
} from "../../store/selectors/detailsBookSelector";
import { addBook } from "../../store/slices/cartReducer";
import { addFavorite } from "../../store/slices/favoriteReducer";
import { StyledSubtitle, StyledTitle } from "../../styles";
import { IBook, IBookDetails, ICartItem } from "../../types";
import { StyledButtonCart, StyledButtonFavorite } from "../BookItem/styles";
import { Container } from "../MainTemplate/styles";
import {
  ContainerDetails,
  ContainerLeft,
  ContainerRight,
  ContentDetails,
  ImageContainer,
  ImageDetails,
  StyledDetails,
  SubtitleDetails,
  TextDetails,
  TextSubtitle,
} from "./styles";

export const DetailsItem = () => {
  const details = useAppSelector(getBookDetails);
  const status = useAppSelector(getBookDetailsStatus);
  const error = useAppSelector(getNewBooksError);


  return (
    <>
      <StyledTitle>{details.title}</StyledTitle>
      <StyledDetails>
        <ImageContainer>
          <ImageDetails src={details.image} alt={details.title} />
        </ImageContainer>
        <ContainerDetails>
          <ContainerLeft>
            <TextDetails>Authors</TextDetails>
            <TextDetails>Publisher</TextDetails>
            <TextDetails>Pages</TextDetails>
            <TextDetails>Raiting</TextDetails>
            <TextSubtitle>Price</TextSubtitle>
            
          </ContainerLeft>
          <ContainerRight>
            <ContentDetails>{details.authors}</ContentDetails>
            <ContentDetails>{details.publisher}</ContentDetails>
            <ContentDetails>{details.pages}</ContentDetails>
            <ContentDetails>
              {details.rating} <BlackStar />
            </ContentDetails>
            <SubtitleDetails>{details.price === "$0.00" ? "Out of stock" : details.price}</SubtitleDetails>
            
          </ContainerRight>
        </ContainerDetails>
      </StyledDetails>
      <ContentDetails></ContentDetails>
    </>
  );
};
