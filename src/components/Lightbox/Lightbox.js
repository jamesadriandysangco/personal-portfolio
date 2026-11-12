import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import {
  CloseButton,
  LightboxImg,
  Overlay,
  SharpenFilter,
} from "./LightboxStyles";

const Lightbox = ({ image, onClose }) => {
  const closeRef = useRef(null);
  const [ratio, setRatio] = useState(1.5);

  useEffect(() => {
    if (!image) return undefined;
    const previous = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current && closeRef.current.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous && previous.focus && previous.focus();
    };
  }, [image, onClose]);

  if (!image) return null;

  return createPortal(
    <Overlay
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <CloseButton
        ref={closeRef}
        type="button"
        aria-label="Close"
        onClick={onClose}
      >
        <AiOutlineClose size="2.2rem" aria-hidden="true" />
      </CloseButton>
      <SharpenFilter aria-hidden="true" focusable="false">
        <filter id="lightbox-sharpen">
          <feConvolveMatrix
            order="3"
            preserveAlpha="true"
            kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"
          />
        </filter>
      </SharpenFilter>
      <LightboxImg
        src={image.src}
        alt={image.alt}
        $ratio={ratio}
        decoding="async"
        onLoad={(e) => {
          const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
          if (w && h) setRatio(w / h);
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </Overlay>,
    document.body
  );
};

export const openOnKey = (open) => (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    open();
  }
};

export default Lightbox;
