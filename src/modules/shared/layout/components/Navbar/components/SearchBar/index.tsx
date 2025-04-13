import { TextInput } from "@modules/shared/components/TextInput";
import { SearchSuggestion } from "@modules/shared/types/search-suggestion";
import { useRef, type FC } from "react";
import { FiSearch } from "react-icons/fi";
import { SuggestionList } from "./component/SuggestionsList";
import { useToggleWithClickOutside } from "@modules/shared/hooks/useToggleWithClickOutside";

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
  const searchRef = useRef<HTMLDivElement>(null);
  const toggleSearchSuggestionList = useToggleWithClickOutside(searchRef);

  return (
    <div className="w-2xl relative" ref={searchRef}>
      <TextInput
        onFocus={toggleSearchSuggestionList.handleOpen}
        startIcon={<FiSearch />}
        size="full"
        placeholder="Search"
      />
      {toggleSearchSuggestionList.isOpen && (
        <SuggestionList searchSuggestions={SEARCH_SUGGESTIONS} />
      )}
    </div>
  );
};
