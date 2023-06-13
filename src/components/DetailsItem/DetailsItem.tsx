import { useAppSelector } from "../../store/hooks/hooks";
import { getBookDetails } from "../../store/selectors/detailsBookSelector";
import { StyledTitle } from "../../styles";
import { Rating } from "../Rating/Rating";

import {
  ContainerContentDetails,
  ContainerDescription,
  ContainerDetails,
  ContentDetails,
  ImageContainer,
  ImageDetails,
  StyledDetails,
  StyledDetailsContainer,
  SubtitleDetails,
  TextDescription,
  TextDetails,
  TitleDescription,
} from "./styles";

export const DetailsItem = () => {
  const details = useAppSelector(getBookDetails);

  return (
    <StyledDetailsContainer>
      <StyledTitle>{details.title}</StyledTitle>
      <StyledDetails>
        <ImageContainer>
          <ImageDetails src={details.image} alt={details.title} />
        </ImageContainer>
        <ContainerDetails>
          <ContainerContentDetails>
            <SubtitleDetails>
              {details.price === "$0.00" ? "Out of stock" : details.price}
            </SubtitleDetails>
            <ContentDetails>
              <Rating />
            </ContentDetails>
          </ContainerContentDetails>
          <ContainerContentDetails>
            <TextDetails>Authors</TextDetails>
            <ContentDetails>{details.authors}</ContentDetails>
          </ContainerContentDetails>
          <ContainerContentDetails>
            <TextDetails>Publisher</TextDetails>
            <ContentDetails>{details.publisher}</ContentDetails>
          </ContainerContentDetails>
          <ContainerContentDetails>
            <TextDetails>Language</TextDetails>
            <ContentDetails>{details.language}</ContentDetails>
          </ContainerContentDetails>
          <ContainerContentDetails>
            <TextDetails>Pages</TextDetails>
            <ContentDetails>{details.pages}</ContentDetails>
          </ContainerContentDetails>
          <ContainerContentDetails>
            <TextDetails>Published</TextDetails>
            <ContentDetails>{details.year}</ContentDetails>
          </ContainerContentDetails>
          <ContainerContentDetails>
            <TextDetails>ISBN10</TextDetails>
            <ContentDetails>{details.isbn10}</ContentDetails>
          </ContainerContentDetails>
          <ContainerContentDetails>
            <TextDetails>ISBN13</TextDetails>
            <ContentDetails>{details.isbn13}</ContentDetails>
          </ContainerContentDetails>
        </ContainerDetails>
      </StyledDetails>
      <ContainerDescription>
        <TitleDescription>Description</TitleDescription>
        <TextDescription>{details.desc}</TextDescription>
      </ContainerDescription>
    </StyledDetailsContainer>
  );
};
