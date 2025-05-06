import { TextInput } from "@modules/shared/components/TextInput";
import { SearchSuggestion } from "@modules/shared/types/search-suggestion";
import { useRef, useState, type FC } from "react";
import { FiSearch } from "react-icons/fi";
import { SuggestionList } from "./component/SuggestionsList";
import { useToggleWithClickOutside } from "@modules/shared/hooks/useToggleWithClickOutside";
import { useNavigate } from "react-router";

const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  { isHistory: true, title: "React useState hook" },
  { isHistory: false, title: "React performance optimization" },
  { isHistory: true, title: "How to center a div" },
  { isHistory: false, title: "Latest JavaScript features 2025" },
  { isHistory: true, title: "Tailwind CSS box shadow" },
  { isHistory: false, title: "Next.js vs React performance" },
  { isHistory: true, title: "Git rebase vs merge" },
  { isHistory: false, title: "Best VS Code extensions for developers" },
  { isHistory: true, title: "Clean Code best practices" },
  { isHistory: false, title: "How to improve coding logic" },
];

export const SearchBar: FC = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const toggleSearchSuggestionList = useToggleWithClickOutside(searchRef);

  const onNavigateSearchResult = () => {
    toggleSearchSuggestionList.handleClose();
    navigate(`/results?search_query=${search}`);
  };

  //useEnterKeyPress(onNavigateSearchResult, true);

  return (
    <div className="w-2xl relative" ref={searchRef}>
      <TextInput
        onFocus={toggleSearchSuggestionList.handleOpen}
        startIcon={<FiSearch />}
        size="full"
        placeholder="Search"
        name="search"
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => {
          if (event?.key === "Enter") {
            event.preventDefault();
            onNavigateSearchResult();
          }
        }}
      />
      {toggleSearchSuggestionList.isOpen && (
        <SuggestionList
          onClose={() => toggleSearchSuggestionList.handleClose()}
          searchSuggestions={SEARCH_SUGGESTIONS}
        />
      )}
    </div>
  );
};
