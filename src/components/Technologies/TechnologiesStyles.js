import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 12px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 8px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 22px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 560px;
    flex-direction: row;
    gap: 16px;
  }
`;
