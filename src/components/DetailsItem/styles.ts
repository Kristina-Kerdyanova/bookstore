import styled from "styled-components";
import { typography } from "../../ui/typography";

const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 25px;
  margin-bottom: 72px;
`;

const ImageContainer = styled.div`
  width: 45%;
  background: rgba(80, 34, 34, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    max-width: 500px;
    width: 100%;
    margin: auto;
  }
`;

const ImageDetails = styled.img``;

const ContainerDetails = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
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
`;

const ContainerContentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const ContainerDescription = styled.div`
  margin-bottom: 50px;
`;

const TitleDescription = styled.p`
  font-size: 23px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
`;

const TextDescription = styled.p`
  font-size: 19px;
  line-height: 25px;
`;

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
  ContainerContentDetails,
  ContainerDescription,
  TitleDescription,
  TextDescription,
};
