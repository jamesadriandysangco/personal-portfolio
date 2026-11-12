import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 2rem;
  padding: 2rem 48px 1rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    row-gap: 0.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.6rem 16px 0.8rem;
  }
`;

export const Div2 = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 3.2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: 1;
    column-gap: 2.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    column-gap: 0;
  }
`;

export const Div3 = styled.div`
  grid-column: 3;
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: 1;
    justify-self: center;
  }
`;

export const NavLink = styled.a`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: inline-block;
    padding: 6px 4px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    padding: 6px 8px;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  display: flex;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
