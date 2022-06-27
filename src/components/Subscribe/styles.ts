import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledSubcribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(80, 34, 34, 0.1);
  height: 288px;
  max-width: 1120px;
  width: 100%;
`;

const StyledSubscribeContainer = styled.div`
  height: 176px;
  max-width: 992px;
  width: 100%;
  pad: 56px 64px;
`;

const StyledSubtitleSubscribe = styled.h2`
  ${typography.H2};
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  
  width: 80%;
  height: 56px;
  border-radius: 0.5px;
  display: grid;
  padding-left: 15px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 5px;
  box-shadow: 5px 5px 5px -5px rgba(80, 34, 34, 0.6);
`;

const SubscribeButton = styled.button`
  width: 20%;
  height: 56px;
  border: none;
  cursor: pointer;
  font-family: Bebas Neue;
  font-size: 24px;
  text-align: center;
  background-color: #313037;
  text-transform: uppercase;
  border: none;
  background-color: rgb(49, 48, 55);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 5px 5px 5px -5px rgba(255, 255, 255, 0.2);
`;

export {
  StyledSubcribe,
  StyledForm,
  StyledInput,
  SubscribeButton,
  StyledSubtitleSubscribe,
  StyledSubscribeContainer,
};
