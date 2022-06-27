import React from "react";
import { StyledTextBlack } from "../../styles";
import {
  StyledSubcribe,
  StyledForm,
  SubscribeButton,
  StyledSubtitleSubscribe,
  StyledSubscribeContainer,
  StyledInput,
} from "./styles";

export const Subscribe = () => {
  return (
    <StyledSubcribe>
      <StyledSubscribeContainer>
        <StyledSubtitleSubscribe>
          Subscribe to Newsletter
        </StyledSubtitleSubscribe>
        <StyledTextBlack>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </StyledTextBlack>
        <StyledForm>
          <StyledInput type="text" placeholder="Your email" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </StyledForm>
      </StyledSubscribeContainer>
    </StyledSubcribe>
  );
};
