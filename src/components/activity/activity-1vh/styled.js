import styled from "@emotion/styled";

export const BgGreen = styled.div`
  background: #f1faee;
  color: white;
`;
export const Slogan = styled.div`
  max-width: 620px;
  padding: 35px;
  border-radius: 20px;
  background-color: rgba(250, 250, 250, 0.7);
  position: absolute;
  left: 5%;
  top: 15%;
  color: #1d3557;
  z-index: 1000;
  text-align: left;
  @media (max-width: 768px) {
    max-width: 520px;
    padding: 20px;
  }
  h1 {
    font-size: 56px;
    color: #1d3557;
    @media (max-width: 768px) {
      font-size: 48px;
    }
  }
  p {
    font-size: 32px;
  }
`;
