import { BlackStar, GreyStar } from "../../assets";
import { useAppSelector } from "../../store/hooks/hooks";
import { getBookDetails } from "../../store/selectors/detailsBookSelector";
import styled from "styled-components";

export const Rating: any = () => {
  const details = useAppSelector(getBookDetails);

  if (details.rating === "1") {
    return (
      <StyledRating>
        <BlackStar />
        <GreyStar />
        <GreyStar />
        <GreyStar />
        <GreyStar />
      </StyledRating>
    );
  } else if (details.rating === "2") {
    return (
      <StyledRating>
        <BlackStar />
        <BlackStar />
        <GreyStar />
        <GreyStar />
        <GreyStar />
      </StyledRating>
    );
  } else if (details.rating === "3") {
    return (
      <StyledRating>
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <GreyStar />
        <GreyStar />
      </StyledRating>
    );
  } else if (details.rating === "4") {
    return (
      <StyledRating>
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <GreyStar />
      </StyledRating>
    );
  } else if (details.rating === "5") {
    return (
      <StyledRating>
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <BlackStar />
        <BlackStar />
      </StyledRating>
    );
  } else if (details.rating === "0") {
    return (
      <StyledRating>
        {" "}
        <GreyStar />
        <GreyStar />
        <GreyStar />
        <GreyStar />
        <GreyStar />
      </StyledRating>
    );
  }
};

const StyledRating = styled.div`
  display: flex;
`;
