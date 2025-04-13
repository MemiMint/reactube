import { SearchSuggestion } from "@modules/shared/types/search-suggestion";
import type { FC } from "react";
import { Suggestion } from "./components/Suggestion";

export const SuggestionList: FC<{ searchSuggestions: SearchSuggestion[] }> = ({
  searchSuggestions,
}) => {
  return (
    <div
      style={{ overflowY: "auto" }}
      className="flex flex-col gap-2 rounded-md shadow-2xl absolute w-full max-h-80 bg-white top-12 left-0 py-4"
    >
      {searchSuggestions
        .sort((a, b) => Number(b.isHistory) - Number(a.isHistory))
        .map((searchSuggestion, index) => {
          return <Suggestion key={index} searchSuggestion={searchSuggestion} />;
        })}
    </div>
  );
};
