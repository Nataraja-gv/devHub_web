import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Mail,
  MapPin,
  Briefcase,
  Github,
  Linkedin,
  UserRoundPen,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const tabs = ["About", "Skills", "Images", "Contact"];

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("About");
  const navigate = useNavigate()

  if (!user)
    return (
      <div className="text-center py-20 text-lg text-gray-500">Loading...</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto rounded-3xl shadow-2xl border backdrop-blur-xl border-gray-200 bg-white/60 dark:bg-white/10 p-10 space-y-10 relative"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8  ">
          <div className="relative">
            {user.profileImage?.[0]?.images_link && (
              <img
                src={user.profileImage[0].images_link}
                alt="avatar"
                className="w-36 h-36 md:w-60 md:h-50 object-cover rounded-full border-4 border-white shadow-xl hover:scale-105 transition-transform"
              />
            )}
            <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow-md truncate capitalize">
              {user.role}
            </div>
          </div>
          <div className="text-center md:text-left space-y-2 flex-grow ">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white capitalize">
              {user.userName}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 italic">
              {user.bio}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center md:justify-start gap-4 border-b pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-1 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-blue-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-gray-800 dark:text-white">
          {activeTab === "About" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <p>
                <Mail className="inline w-5 h-5 mr-2 text-blue-500" />{" "}
                {user.email}
              </p>
              <p className=" capitalize">
                <MapPin className="inline w-5 h-5 mr-2 text-blue-500" />{" "}
                {user.city}
              </p>
              <p>
                <Briefcase className="inline w-5 h-5 mr-2 text-blue-500" />{" "}
                {user.experience} years experience
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Joined:</strong>{" "}
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </motion.div>
          )}

          {activeTab === "Skills" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-3"
            >
              {user.skills?.map((skill, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-md"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "Images" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center flex  gap-6 flex-wrap text-gray-500"
            >
              {user?.profileImage?.map((img) => (
                <img
                  src={img?.images_link}
                  alt="avatar"
                  className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-[15px] border-4 border-white shadow-xl hover:scale-105 transition-transform"
                />
              ))}
            </motion.div>
          )}

          {activeTab === "Contact" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-4"
            >
              {user.githubLink && (
                <a
                  href={user.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
              )}
              {user.linkedinLink && (
                <a
                  href={user.linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              )}
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 border-t pt-4">
          &copy; {new Date().getFullYear()} DevHub. All rights reserved.
        </div>

        <a className="flex items-center gap-2 text-blue-600 hover:underline absolute top-[-10px] right-[50px] font-[700]" onClick={()=> navigate("/profile/edit")}>
          <UserRoundPen className="w-5 h-5" />
          Edit Profile
        </a>
      </motion.div>
    </div>
  );
};

export default UserProfile;
