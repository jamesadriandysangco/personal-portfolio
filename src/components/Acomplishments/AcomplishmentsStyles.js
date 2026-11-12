import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin-top: 12px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 8px;
  }
`;

export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  min-height: 144px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: ${(props) => (props.$zoom ? "zoom-in" : "default")};
  transition: background 0.3s ease;

  &:hover,
  &:focus-visible {
    background: ${(props) => (props.$zoom ? "#283656" : "#212d45")};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: 128px;
    padding: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 0;
    padding: 20px 16px;
  }
`;

export const BoxImg = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const BoxNum = styled.h5`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.01em;
  color: #ffffff;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 26px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const BoxText = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 17px;
    line-height: 26px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;
