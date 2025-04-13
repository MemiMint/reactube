import type { FC } from "react";
import { FiSearch } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { SearchSuggestion } from "@shared/types/search-suggestion";

type SuggestionProps = {
  searchSuggestion: SearchSuggestion;
};

export const Suggestion: FC<SuggestionProps> = (props) => {
  return (
    <div className="p-2 flex items-center gap-4 hover:bg-gray-200">
      {props.searchSuggestion.isHistory ? (
        <MdHistory size={18} />
      ) : (
        <FiSearch size={18} />
      )}
      <h3 className="text-sm font-primary">{props.searchSuggestion.title}</h3>
    </div>
  );
};
