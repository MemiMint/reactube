import { VideoCard } from "@modules/shared/components/VideoCard";
import { Video } from "@modules/shared/types/video";

const VIDEOS: Video[] = [
  {
    thumbnailUrl: "https://i.ytimg.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=1",
    title: "How to Learn JavaScript in 2025!",
    channelName: "CodeMaster",
    views: "1.2M",
    releaseDate: "2 months ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/2GgK4Q9XfWg/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=2",
    title: "The Future of AI in 2025!",
    channelName: "Tech Insider",
    views: "850K",
    releaseDate: "1 week ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=3",
    title: "Chill Lo-Fi Beats to Code To",
    channelName: "LofiGirl",
    views: "10.5M",
    releaseDate: "1 year ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/V74l_zS1x8E/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=4",
    title: "Mastering React in 2025: Complete Guide",
    channelName: "React Dev",
    views: "320K",
    releaseDate: "3 weeks ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=5",
    title: "You Just Got Rickrolled!",
    channelName: "Rick Astley",
    views: "999M",
    releaseDate: "14 years ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=6",
    title: "PSY - GANGNAM STYLE (강남스타일) M/V",
    channelName: "OfficialPSY",
    views: "4.6B",
    releaseDate: "11 years ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/3GwjfUFyY6M/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=7",
    title: "Happy New Year 2025! Fireworks Show",
    channelName: "World Events",
    views: "2.3M",
    releaseDate: "3 months ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/kffacxfA7G4/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=8",
    title: "Justin Bieber - Baby ft. Ludacris",
    channelName: "JustinBieberVEVO",
    views: "3.2B",
    releaseDate: "14 years ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/E0ZHXVp_wUE/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=9",
    title: "10 Insane Tech Gadgets You Must See in 2025!",
    channelName: "Future Tech",
    views: "900K",
    releaseDate: "1 month ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/1G4isv_Fylg/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=10",
    title: "Coldplay - Paradise (Official Video)",
    channelName: "Coldplay",
    views: "2.7B",
    releaseDate: "12 years ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=11",
    title: "YouTube API Tutorial for Beginners",
    channelName: "Code Explained",
    views: "450K",
    releaseDate: "5 months ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/Zi_XLOBDo_Y/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=12",
    title: "Michael Jackson - Billie Jean (Official Video)",
    channelName: "MichaelJacksonVEVO",
    views: "1.4B",
    releaseDate: "15 years ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/XS088Opj9o0/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=13",
    title: "Motivational Speech - Start Your Day Right!",
    channelName: "Success Mindset",
    views: "1M",
    releaseDate: "2 weeks ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/ZXsQAXx_ao0/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=14",
    title: "The Most Satisfying Video Ever",
    channelName: "Oddly Satisfying",
    views: "6.8M",
    releaseDate: "8 months ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/IcrbM1l_BoI/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=15",
    title: "Clean Bandit - Rather Be ft. Jess Glynne",
    channelName: "CleanBanditVEVO",
    views: "785M",
    releaseDate: "9 years ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/XqZsoesa55w/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=16",
    title: "Baby Shark Dance | Sing Along",
    channelName: "Pinkfong",
    views: "13B",
    releaseDate: "6 years ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/TZc5r_MXUzM/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=17",
    title: "Top 10 Best Movies of 2025 (So Far)",
    channelName: "Movie Buff",
    views: "540K",
    releaseDate: "3 weeks ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/9iHM6X6uUH8/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=18",
    title: "NASA's First Human Mission to Mars",
    channelName: "SpaceX Live",
    views: "7.1M",
    releaseDate: "4 days ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/FKqVg4wLE2g/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=19",
    title: "The Evolution of Gaming - 1990 to 2025",
    channelName: "Gaming History",
    views: "3.4M",
    releaseDate: "6 months ago",
  },
  {
    thumbnailUrl: "https://i.ytimg.com/vi/Wch3gJG2GJ4/maxresdefault.jpg",
    channelAvatarUrl: "https://i.pravatar.cc/150?img=20",
    title: "Relaxing Ocean Sounds | 10 Hours",
    channelName: "Nature Sounds",
    views: "4.9M",
    releaseDate: "1 year ago",
  },
];

const Page = () => {
  return (
    <>
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {VIDEOS.map((video, index) => {
          return <VideoCard key={index} video={video} />;
        })}
      </div>
    </>
  );
};

export default Page;
