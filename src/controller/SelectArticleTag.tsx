import { useState } from "react";
import SelectButton from "../components/SelectButton";
import SelectArticleTagPage from "../pages/selectArticleTag/SelectArticleTagPage";
import { PortalToBody, PortalToBodyProps } from "../utils/PortalToBody";

export function SelectArticleTagDialog({ children }: PortalToBodyProps) {
  const [showDialog, setShowDialog] = useState(false);

  const onClick = function () {
    setShowDialog(true);
  };

  return (
    <div>
      <SelectButton content="게시판 · 태그 선택" onClick={onClick} />
      {children}
      {showDialog ? (
        <PortalToBody>
          <SelectArticleTagPage />
        </PortalToBody>
      ) : null}
    </div>
  );
}
