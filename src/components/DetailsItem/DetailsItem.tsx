import { useAppSelector } from "../../store/hooks/hooks";
import { getBookDetails } from "../../store/selectors/detailsBookSelector";
import { StyledTitle } from "../../styles";
import { Rating } from "../Rating/Rating";

import {
  ContainerDetails,
  ContainerLeft,
  ContainerRight,
  ContentDetails,
  ImageContainer,
  ImageDetails,
  StyledDetails,
  StyledDetailsContainer,
  SubtitleDetails,
  TextDetails,
  TextSubtitle,
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
              <Rating/>
            </ContentDetails>
            <SubtitleDetails>
              {details.price === "$0.00" ? "Out of stock" : details.price}
            </SubtitleDetails>
          </ContainerRight>
        </ContainerDetails>
      </StyledDetails>
      <ContentDetails></ContentDetails>
    </StyledDetailsContainer>
  );
};
