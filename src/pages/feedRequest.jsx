import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { getAllRequests } from "../services/getAllFeeds";
import RequestFeedCard from "../component/requestFeedCard";
import { postReviewConnection } from "../services/postInterestedFeed";

const FeedRequestPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [feedsData, setFeedsData] = useState([]);

  console.log(feedsData, "feedsData");
  useEffect(() => {
    const fetchRequestFeedsApi = async () => {
      try {
        const res = await getAllRequests();
        console.log(res, "reee");
        setFeedsData(res?.data);
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    };
    fetchRequestFeedsApi();
  }, []);

    const handleReviewConnection = async (status, requestId) => {
      try {
        await postReviewConnection(status, requestId);
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center gap-6 p-6">
      {feedsData.length > 0 ? (
        feedsData.map((user) => (
          <RequestFeedCard
            key={user._id}
            user={user?.fromUserId}
            handleReviewConnection={handleReviewConnection}
            requestId={user?._id}
          />
        ))
      ) : (
        <p className="text-gray-600">No developer profiles found.</p>
      )}
    </div>
  );
};

export default FeedRequestPage;
