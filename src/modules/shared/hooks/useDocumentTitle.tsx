import { useEffect } from "react";

export const useDocumentTitle = (pageTitle: string) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
};
