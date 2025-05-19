import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { getAllRequests } from "../services/getAllFeeds";
import RequestFeedCard from "../component/requestFeedCard";
import { postReviewConnection } from "../services/postInterestedFeed";
import { useDispatch } from "react-redux";
import { setTotalRequests } from "../utils/features/demoslice";

const FeedRequestPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [feedsData, setFeedsData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchRequestFeedsApi = async () => {
      try {
        const res = await getAllRequests();
       
        setFeedsData(res?.data);
        dispatch(setTotalRequests(res?.data?.length))
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    };
    fetchRequestFeedsApi();
  }, [feedsData]);

  const handleReviewConnection = async (status, requestId) => {
    try {
      await postReviewConnection(status, requestId);

      setFeedsData((prev) => {
        const updatedFeeds = prev.filter((feed) => feed._id !== requestId);
         dispatch(setTotalRequests(updatedFeeds?.length))
        return updatedFeeds;
      });
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
