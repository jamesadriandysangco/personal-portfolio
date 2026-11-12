import styled from "styled-components";

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 16px 0 12px;
`;

export const HeroNote = styled.p`
  font-size: 15px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;

  a {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: underline;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  padding-right: 24px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 0;

    margin: 0 auto;

    & > p:first-of-type {
      display: flex;
      flex-direction: column;
    }
    & > p:first-of-type > br {
      display: none;
    }
    & > p:first-of-type > span:first-of-type {
      order: 1;
    }
  }
`;

export const HeroVisual = styled.div`
  position: relative;
  align-self: center;

  & > div > svg {
    display: block;
    width: 115%;
    margin-left: -7.5%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 440px;
    margin: 32px auto 0;

    & > div > svg {
      width: 100%;
      margin-left: 0;
    }
  }
`;

export const ProfilePhoto = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 360px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 28px;
  border: 2px solid ${(props) => props.theme.colors.background2};

  @media ${(props) => props.theme.breakpoints.sm} {
    width: clamp(200px, 62%, 240px);
  }
`;
