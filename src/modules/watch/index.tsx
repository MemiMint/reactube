import { VideoPlayer } from "./components/VideoPlayer";
import { VideoTitle } from "./components/VideoTitle";
import { ChannelInfo } from "./components/ChannelInfo";
import { LikesAndDislikes } from "./components/LikesAndDislikes";
import { VideoDescription } from "./components/VideoDescription";
import { RECOMMENDED_VIDEOS, VIDEO_DESCRIPTION } from "@modules/mock/constants";
import { RecommendedVideoList } from "./components/RecommendedVideoList";
import { CommentSection } from "./components/CommentSection";

const Watch = () => {
  return (
    <div className="flex flex-col px-4 md:px-10 py-6 gap-6">
      {/* Video & Recommendations */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Video Player Placeholder */}
        <div className="flex-1">
          <VideoPlayer />
          <div>
            <VideoTitle title="Elijah Who - Sweatpants" />

            <div className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
              {/* Channel Info + Subscribe */}
              <ChannelInfo
                channelAvatarUrl="https://i.pravatar.cc/150?img=10"
                channelName="Elijah Who"
                channelSubscriptions={9999}
              />

              {/* Like / Dislike */}
              <div className="flex items-center">
                <LikesAndDislikes likes={0} dislikes={0} />
              </div>
            </div>

            {/* Description */}
            <VideoDescription
              views={99999}
              description={VIDEO_DESCRIPTION}
              releaseDate={new Date("2022-05-22")}
            />
          </div>

          {/* Comment Section */}
          <CommentSection />
        </div>

        {/* Recommended Videos */}
        <RecommendedVideoList recommendedVideos={RECOMMENDED_VIDEOS} />
      </div>
    </div>
  );
};

export default Watch;
