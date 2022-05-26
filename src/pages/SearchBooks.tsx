import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SearchBooks = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    navigate(`search/${data.title}/1`);
  }
  return (
    <div>
      <h1>SearchBooks</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Search"
          {...register('title')}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
