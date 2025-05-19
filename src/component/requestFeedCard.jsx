import React from "react";
import {
  Mail,
  MapPin,
  ThumbsUp,
  ThumbsDown,
  UserCog,
  MessageSquareCode,
} from "lucide-react";

const RequestFeedCard = ({ user, handleReviewConnection, requestId }) => {
  return (
    <div className="relative w-[350px] h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
      {/* Background Image */}
      <img
        src={
          user?.profileImage?.[0]?.images_link ||
          "https://via.placeholder.com/350x520"
        }
        alt={user.userName}
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
        <h2 className="text-3xl font-bold capitalize">{user.userName}</h2>
        <p className="text-sm flex items-center gap-1 text-white">
          <MessageSquareCode className="w-4 h-4" /> {user.age} age old
        </p>
        <p className="text-sm flex items-center gap-1 text-white">
          <MapPin className="w-4 h-4" /> {user.city}
        </p>
        <p className="text-sm flex items-center gap-1 text-white mt-1">
          <UserCog className="w-4 h-4" /> {user.role}
        </p>
        <div className="mt-2">
          <p className="text-sm text-white">{user.bio}</p>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium text-white mb-1">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {user.skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-10">
          <button
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full"
            onClick={() => handleReviewConnection("rejected", requestId)}
          >
            rejected
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full"
            onClick={() => handleReviewConnection("accepted", requestId)}
          >
            accepted
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestFeedCard;
