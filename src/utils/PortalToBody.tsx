import { ReactNode, useRef } from "react";
import ReactDom from "react-dom";

// https://jaeseokim.dev/React/React-Portal_Render%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90_%ED%99%9C%EC%9A%A9%EB%B0%A9%EC%95%88_%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0/

export type PortalToBodyProps = {
  children?: ReactNode;
};

export const PortalToBody = ({ children }: PortalToBodyProps) => {
  const container = useRef(document.body);
  return ReactDom.createPortal(children, container.current);
};
