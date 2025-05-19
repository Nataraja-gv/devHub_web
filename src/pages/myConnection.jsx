import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import ConnectionFeedCard from "../component/connectionFeed";
import { getAllMyConnections } from "../services/getAllFeeds";

const MyConnectionPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [feedsData, setFeedsData] = useState([]);

  useEffect(() => {
    const fetchRequestFeedsApi = async () => {
      try {
        const res = await getAllMyConnections();

        setFeedsData(res?.data);
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    };
    fetchRequestFeedsApi();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center gap-6 p-6">
      {feedsData.length > 0 ? (
        feedsData.map((user) => (
          <ConnectionFeedCard key={user._id} user={user?.fromUserId} />
        ))
      ) : (
        <p className="text-gray-600">No developer profiles found.</p>
      )}
    </div>
  );
};

export default MyConnectionPage;
