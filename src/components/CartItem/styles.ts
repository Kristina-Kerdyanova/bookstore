import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "../../ui/typography";

const StyledLinkItem = styled(Link)`
  text-decoration: none;
`;

// const StyledCartItem = styled(motion.div)`
//   display: flex;
//   justify-content: space-between;

//   padding: 1rem;
//   border-radius: 10px;
//   box-shadow: 0px 5px 10px 2px rgba(80, 34, 34, 0.2);

//   font: inherit;
//   vertical-align: baseline;
// `;

const CancelButton = styled.button`
  max-width: 12px;
  width: 100%;
  margin: 0 10px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
  margin: 10px 20px;
`;

const StyledContainerText = styled.div`
  max-width: 446px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem 1rem;

  @media (max-width: 800px) {
  }
`;

const StyledFavoriteItem = styled(motion.div)`
  display: flex;
  margin: 2rem 0;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2px rgba(80, 34, 34, 0.2);
  font: inherit;
  vertical-align: baseline;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledTextSubtitle = styled.p`
  ${typography.textGrey};
  justify-content: space-between;
  height: 100%;
`;

const ContainerContent = styled.div`
  display: flex;
`;

export {
  StyledLinkItem,
  CancelButton,
  StyledContainerText,
  StyledFavoriteItem,
  StyledTextSubtitle,
  ContainerContent,
};
