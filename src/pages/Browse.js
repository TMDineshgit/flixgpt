import BrowseMainWrapper from "../components/BrowseMainWrapper";
import useNowPlayingList from "../hooks/useNowPlayingList"
import usePopularList from "../hooks/usePopularList";
import useUpcomingList from "../hooks/useUpcomingList"
import useTopRatedList from "../hooks/useTopRatedList";

const Browse = () => {

  useNowPlayingList();
  usePopularList();
  useUpcomingList();
  useTopRatedList();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <BrowseMainWrapper />
    </div>
  );

};

export default Browse;
