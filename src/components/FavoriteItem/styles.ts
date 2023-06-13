import styled from "styled-components";

const StyledConteinerContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
  margin: 0 20px;
`;

export { RemoveButton, StyledConteinerContent };
