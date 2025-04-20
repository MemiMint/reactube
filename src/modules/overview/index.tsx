import { VIDEOS } from "@modules/mock/constants";
import { VideoList } from "@modules/shared/components/VideoList";

const Page = () => {
  return (
    <>
      <VideoList videos={VIDEOS} layout="row" />
    </>
  );
};

export default Page;
