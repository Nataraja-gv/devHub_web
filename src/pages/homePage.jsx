import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { getAllFeeds } from "../services/getAllFeeds";
import FeedCard from "../component/feedcard";
import { postConnection } from "../services/postInterestedFeed";

const HomePage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [feedsData, setFeedsData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currectIndex, setCurrectIndex] = useState(0);

  useEffect(() => {
    fetchFeedsApi(page);
  }, []);

  const fetchFeedsApi = async (pageNumber) => {
    setLoading(true);
    try {
      const res = await getAllFeeds(pageNumber, limit);
      const newFeeds = res?.data;
      if (newFeeds.length > 0) {
        setFeedsData((prev) => [...prev, ...newFeeds]);
        if (newFeeds.length < limit) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handlePostConnection = async (status, requestId) => {
    try {
      await postConnection(status, requestId);
      setFeedsData((prev) => {
        const updatedFeeds = prev.filter((it) => it._id !== requestId);
        if (currectIndex >= updatedFeeds.length && updatedFeeds.length > 0) {
          setCurrectIndex(updatedFeeds.length - 1);
        }
        return updatedFeeds;
      });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  const handleNext = () => {
    const nextIndex = currectIndex + 1;
    if (nextIndex < feedsData.length) {
      setCurrectIndex(nextIndex);
    } else if (hasMore && !loading) {
      const nextPage = page + 1;
      fetchFeedsApi(nextPage).than(() => {
        setPage(nextPage);
        setCurrectIndex(nextIndex);
      });
    }
  };

  const handlePrev = () => {
    setCurrectIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6 gap-4">
      {feedsData.length > 0 ? (
        <>
          <FeedCard
            user={feedsData[currectIndex]}
            handlePostConnection={handlePostConnection}
          />
          <div className="flex gap-4 mt-4">
            <button
              onClick={handlePrev}
              disabled={currectIndex === 0}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!hasMore && currectIndex === feedsData.length - 1}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">No developer profiles found.</p>
      )}
    </div>
  );
};

export default HomePage;
