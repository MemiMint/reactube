import { FC } from "react";
import NotFoundImage from "../../../../assets/undraw_page-eaten_b2rt.svg";
import { useSearchParams } from "react-router";

export const NoResults: FC = () => {
  const [queryParams] = useSearchParams();

  const searchQuery = queryParams.get("search_query");

  return (
    <div className="flex flex-col items-center text-center gap-6">
      <img style={{ width: 250, height: 250 }} src={NotFoundImage} />
      <h3 className="font-primary text-lg font-medium">
        Results for {searchQuery} are not found
      </h3>
    </div>
  );
};
