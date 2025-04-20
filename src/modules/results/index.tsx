import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { ContentSwitcher } from "./components/ContentSwitcher";
import { SwitchType } from "./components/ContentSwitcher/type";
import { GridModeSwitcher } from "./components/GridSwitcher";
import { CHANNELS, VIDEOS } from "@modules/mock/constants";
import { useDocumentTitle } from "@modules/shared/hooks/useDocumentTitle";
import { useLoading } from "@modules/shared/hooks/useLoading";
import { Video } from "@modules/shared/types/video";
import { NoResults } from "./components/NoResults";
import { Channel } from "@modules/shared/types/channel";
import { Spinner } from "@modules/shared/components/Spinner";
import { SearchResults } from "./components/SearchResults";

const SWITCH_BUTTONS = [
  {
    label: "all",
    type: "all" as SwitchType,
  },
  {
    label: "channels",
    type: "accounts" as SwitchType,
  },
  {
    label: "videos",
    type: "videos" as SwitchType,
  },
];

type GridMode = "vertical" | "horizontal";

const Results = () => {
  const [queryParameters] = useSearchParams();
  const [searchType, setSearchType] = useState<SwitchType>("all");
  const [gridMode, setGridMode] = useState<GridMode>("vertical");

  const [channels] = useState<Channel[]>(CHANNELS);
  const [videos] = useState<Video[]>(VIDEOS);

  const loading = useLoading();

  const searchQuery: string = queryParameters.get("search_query")!;

  const shouldShowNotFound =
    !loading.isLoading && !videos.length && !channels.length;

  useDocumentTitle(searchQuery ?? "Reactube");

  useEffect(() => {
    loading.toggleLoading();

    const timeout = setTimeout(() => {
      // pretend we're fetching something
      loading.toggleLoading();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between px-10 mt-6">
        <ContentSwitcher
          switchers={SWITCH_BUTTONS}
          value={searchType}
          onClick={(type) => setSearchType(type)}
        />
        <GridModeSwitcher
          disabled={searchType === "all"}
          value={gridMode}
          onClick={(type) => setGridMode(type)}
        />
      </div>
      {loading.isLoading && <Spinner size="large" />}
      {shouldShowNotFound && <NoResults />}
      {!loading.isLoading && videos.length && channels.length && (
        <SearchResults
          channels={channels}
          videos={videos}
          gridMode={gridMode}
          searchType={searchType}
        />
      )}
    </>
  );
};

export default Results;
