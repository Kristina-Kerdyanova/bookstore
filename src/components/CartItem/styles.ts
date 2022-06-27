import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  height: 12px;
  width: 100%;
  margin: 0 10px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
  margin: 10px 20px;
`;

const StyledContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export { StyledLinkItem, CancelButton, StyledContainerText };
