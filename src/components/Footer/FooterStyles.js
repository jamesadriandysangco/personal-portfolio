import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 64px 48px 48px;
  margin: 0 auto;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 48px 48px 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 40px 16px 40px;
    width: calc(100vw - 32px);
  }
`;

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 28px;
  overflow-wrap: anywhere;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 17px;
    display: flex;
    align-items: center;
    min-height: 44px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-top: 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding-top: 24px;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0;
    text-align: center;
  }
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  line-height: 28px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 17px;
    line-height: 26px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, max-content));
  gap: 48px;
  margin-top: 16px;
  padding: 32px 0;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    gap: 24px;
    margin-top: 12px;
    padding: 24px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 8px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LinkTitle = styled.h4`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
`;
