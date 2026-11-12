import styled from "styled-components";

export const Img = styled.img`
  aspect-ratio: 2 / 1;
  object-fit: cover;
  display: block;
  width: 50%;
  flex-shrink: 0;
  align-self: center;
  cursor: zoom-in;
  transition: opacity 0.3s ease;
  &:hover,
  &:focus-visible {
    opacity: 0.85;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;
  margin-top: 16px;
  @media ${(props) => props.theme.breakpoints.md} {
    row-gap: 24px;
    margin-top: 12px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    row-gap: 24px;
    margin-top: 8px;
  }
`;

export const BlogCard = styled.div`
  border-radius: 12px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const CardBody = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px 16px;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.sub};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #9cc9e3;
  font-size: 32px;
  line-height: 40px;
  text-transform: none;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 26px;
    line-height: 34px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 22px;
    line-height: 30px;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 16px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  color: #e4e6e7;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 24px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 16px;
  margin-top: 8px;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 17px;
  line-height: 26px;
`;
