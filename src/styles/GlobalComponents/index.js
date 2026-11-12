import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) =>
    props.nopadding ? "0" : props.grid ? "32px 48px 0" : "64px 48px 0"};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  ${(props) => props.grid && "& > * { width: 100%; min-width: 0; }"}

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) =>
      props.nopadding ? "0" : props.grid ? "24px 48px 0" : "48px 48px 0"};
    flex-direction: column;
    ${(props) => props.grid && "grid-template-columns: 1fr;"}
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) =>
      props.nopadding ? "0" : props.grid ? "16px 16px 0" : "40px 16px 0"};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "64px")};
  letter-spacing: -0.01em;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
  padding: ${(props) => (props.main ? "58px 0 0" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "60px" : "56px")};
    margin-bottom: 20px;
    padding: ${(props) => (props.main ? "40px 0 0" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;
    padding: ${(props) => (props.main ? "16px 0 0" : "0")};
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 24px;
  color: rgba(255, 255, 255, 0.6);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 17px;
    line-height: 28px;
    padding-bottom: 16px;
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  margin-bottom: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
    margin-bottom: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 3px;
    margin-bottom: 16px;
  }
`;

export const ButtonBack = styled.div`
  width: 200px;
  height: 56px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${({ $alt }) => (!$alt ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)" : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)")};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 184px;
    height: 48px;
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 44px;
    font-size: 14px;
  }
`;

export const LinkButtonFront = styled.a`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ $alt }) => (!$alt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)")};
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: 0.4s ease;
  font-size: inherit;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => (disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none")};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow:
      inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow:
      inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ $alt }) => ($alt ? "20px" : "16px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
