import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "../../ui/typography";

const StyledBookItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2px rgba(80, 34, 34, 0.2);
  font: inherit;
  vertical-align: baseline;
`;

const StyledButtonFavorite = styled.button`
  max-width: 24px;
  width: 100%;
  
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
`;

const StyledButtonCart = styled.button`
  max-width: 24px;
  width: 100%;
  height: 24px;
  margin: 0 10px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #313037;
`;

const StyledImage = styled.img`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
`;

const StyledText = styled.p`
  ${typography.textGrey};
  overflow: hidden;
`;

const StyledPrice = styled.p`
  ${typography.H2};
  font-size: 20px;
`;

const StyledBigPrice = styled.p`
text-align: center;
  width: 100%;
  max-width: 87px;
  ${typography.H2};
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSubtitleBook = styled.h2`
  ${typography.H2};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  height: 65px;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export {
  StyledBookItem,
  StyledButtonFavorite,
  StyledButtonCart,
  StyledLink,
  StyledImage,
  ButtonContainer,
  StyledText,
  StyledPrice,
  StyledSubtitleBook,
  StyledButton,
  StyledBigPrice,
};
