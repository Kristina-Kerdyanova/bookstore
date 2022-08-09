import styled from "styled-components";

const StyledConteinerContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
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

export { RemoveButton, StyledConteinerContent };
