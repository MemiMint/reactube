import type { FC } from "react";
import { FiSearch } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { SearchSuggestion } from "@shared/types/search-suggestion";
import { useNavigate } from "react-router";

type SuggestionProps = {
  searchSuggestion: SearchSuggestion;
  onClose(): void;
};

export const Suggestion: FC<SuggestionProps> = (props) => {
  const navigate = useNavigate();

  const onClick = () => {
    props.onClose();
    navigate(
      `/results?search_query=${encodeURIComponent(props.searchSuggestion.title)}`,
    );
  };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-2 flex items-center gap-4 hover:bg-gray-200"
    >
      {props.searchSuggestion.isHistory ? (
        <MdHistory size={18} />
      ) : (
        <FiSearch size={18} />
      )}
      <h3 className="text-sm font-primary">{props.searchSuggestion.title}</h3>
    </div>
  );
};
