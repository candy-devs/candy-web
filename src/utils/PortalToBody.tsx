import { ReactNode, useRef } from "react";
import ReactDom from "react-dom";

export type PortalToBodyProps = {
  children?: ReactNode;
};

export const PortalToBody = ({ children }: PortalToBodyProps) => {
  const container = useRef(document.body);
  return ReactDom.createPortal(children, container.current);
};
