import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { getAllFeeds } from "../services/getAllFeeds";
import FeedCard from "../component/feedcard";
import { postConnection } from "../services/postInterestedFeed";

const HomePage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [feedsData, setFeedsData] = useState([]);

  useEffect(() => {
    const fetchFeedsApi = async () => {
      try {
        const res = await getAllFeeds();
        setFeedsData(res?.data);
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    };
    fetchFeedsApi();
  }, []);

  const handlePostConnection = async (status, requestId) => {
    try {
      await postConnection(status, requestId);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center gap-6 p-6">
      {feedsData?.length > 0 ? (
        feedsData?.map((user) => <FeedCard key={user._id} user={user} handlePostConnection={handlePostConnection } />)
      ) : (
        <p className="text-gray-600">No developer profiles found.</p>
      )}
    </div>
  );
};

export default HomePage;
