import styled from "styled-components";
import { typography } from "../../ui/typography";

const StyledDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 128px;
  margin-bottom: 72px;
`;

const ImageContainer = styled.div`
  background: rgba(80, 34, 34, 0.1);
  text-align: center;
`;

const ImageDetails = styled.img``;

const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ContainerLeft = styled.div``;

const TextDetails = styled.p`
  ${typography.textGrey};
  font-family: "Helios";
  line-height: 32px;
  margin-bottom: 15px;
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ContentDetails = styled.p`
  ${typography.textBlack};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  margin-bottom: 15px;
`;

const TextSubtitle = styled.h2`
  font-family: "Helios";
  font-size: 24px;
  line-height: 32px;
  color: #a8a8a8;
  margin-bottom: 20px;
`;

const SubtitleDetails = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
  margin-bottom: 20px;
`;

const StyledDetailsContainer = styled.div`
display: flex;
flex-direction: column;

`

export {
  StyledDetailsContainer,
  ImageDetails,
  ContainerDetails,
  ContainerLeft,
  TextDetails,
  ContainerRight,
  ContentDetails,
  StyledDetails,
  ImageContainer,
  TextSubtitle,
  SubtitleDetails,
};
