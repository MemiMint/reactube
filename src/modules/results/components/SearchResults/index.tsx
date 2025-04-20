import { FC } from "react";
import { SearchResultProps } from "./types";
import { ChannelList } from "@modules/shared/components/ChannelList";
import { VideoList } from "@modules/shared/components/VideoList";

export const SearchResults: FC<SearchResultProps> = (props) => {
  const listLayout = props.gridMode === "horizontal" ? "row" : "column";

  return (
    <div className="flex justify-center my-10 gap-6">
      {props.searchType === "all" && (
        <>
          <ChannelList channels={props.channels} layout={listLayout} />
          <VideoList videos={props.videos} layout={listLayout} />
        </>
      )}
      {props.searchType === "accounts" && (
        <ChannelList channels={props.channels} layout={listLayout} />
      )}
      {props.searchType === "videos" && (
        <VideoList videos={props.videos} layout={listLayout} />
      )}
    </div>
  );
};
