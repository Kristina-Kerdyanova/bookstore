import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SearchButton } from "../SearchButton/SearchButton";
import { StyledSearchForm, StyledInput } from "./styles";

export const Search = () => {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    navigate(`search/${data.title}/1`);
  }

  return (
      <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          placeholder="Search"
          {...register('title')}
        />
        <SearchButton />
      </StyledSearchForm>
  );
};
