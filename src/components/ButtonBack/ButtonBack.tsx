import { useNavigate } from "react-router-dom";
import { Back } from "../../assets";
import { StyledButtonBack } from "./styles";

export const ButtonBack = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledButtonBack type="button" onClick={handleBack}>
      <Back />
    </StyledButtonBack>
  );
};

