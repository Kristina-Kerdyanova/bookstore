import { BookList } from "../components/BookList/BookList";
import { StyledTitle } from "../styles";

export const NewBooks = () => {

  return (
    <div>
      <StyledTitle>New Releases Books</StyledTitle>
      <BookList/>
    </div>
  );
};

