import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 24px 24px;
  background: rgba(8, 11, 18, 0.92);
  cursor: zoom-out;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 64px 8px 16px;
  }
`;

export const LightboxImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-width: ${({ $ratio }) => `min(1800px, calc((100vh - 88px) * ${$ratio}))`};
  border-radius: 8px;
  cursor: default;
  filter: url(#lightbox-sharpen) contrast(1.04) saturate(1.05);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
`;

export const SharpenFilter = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: #212d45;
  color: #fff;
  cursor: pointer;
`;
