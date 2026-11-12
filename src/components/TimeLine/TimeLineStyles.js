import styled from "styled-components";

export const YearList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 8px;
    gap: 24px;
  }
`;

export const YearTitle = styled.h3`
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.02em;
  white-space: nowrap;
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 6px;
  }
`;

export const ItemList = styled.ul`
  list-style: disc;
  padding-left: 22px;
  margin: 0;
`;

export const Item = styled.li`
  list-style: disc;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  &::marker {
    color: rgba(255, 255, 255, 0.45);
  }

  & + & {
    margin-top: 4px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;
