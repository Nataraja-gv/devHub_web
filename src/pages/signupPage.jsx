import React, { useState } from "react";
import FileUpload from "../component/fileupload";

const skillsList = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Django",
  "TypeScript",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "AWS",
  "SQL",
  "MongoDB",
];
const SignUpPage = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [userData, setUserData] = useState({
    userName: "",
    profileImage: [],
    email: "",
    password: "",
    age: null,
    gender: "",
    city: "",
    role: "",
    experience: null,
    skills: [],
    bio: "",
    githubLink: "",
    linkedinLink: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);

  const handleInputchanages = (key, value) => {
    setUserData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  console.log(userData, "userData");
  console.log(selectedImages, "selectedImages");

  const handleMultiImages = (e) => {
    const files = Array.from(e.target.files);
    const total = files.length + selectedImages.length;
    if (total > 5) {
      alert("only upload 5 images")
    }
    const newImages = files.map((file) => ({
      preview: URL.createObjectURL(file),
      file,
      name: file.name,
      type: file.type,
    }));

    const updatedImages = [...selectedImages, ...newImages];

    setSelectedImages(updatedImages);
    setUserData((prev) => ({
      ...prev,
      profileImage: updatedImages.map((item) => item.file),
    }));
  };

  const handleSkillChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills((prev) => prev.filter((s) => s !== skill));
    } else {
      if (selectedSkills.length < 4) {
        setSelectedSkills((prev) => [...prev, skill]);
      } else {
        alert("You can only select up to 4 skills.");
      }
    }
  };

  const handleRemoveImages = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    setUserData((prev) => ({
      ...prev,
      profileImage: updatedImages.map((item) => item.file),
    }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-[700px] bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md my-[40px]">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Create your DevHub account
        </h2>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={userData?.userName}
              onChange={(e) => handleInputchanages("userName", e.target.value)}
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="profileImages"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Profile Images (up to 5)
            </label>
            <FileUpload
              handleMultiImages={handleMultiImages}
              selectedImages={selectedImages}
              handleRemoveImages={handleRemoveImages}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={userData?.email}
              onChange={(e) => handleInputchanages("email", e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={userData?.password}
              onChange={(e) => handleInputchanages("password", e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              max={100}
              value={userData?.age}
              onChange={(e) => handleInputchanages("age", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Gender
            </label>
            <select
              id="gender"
              value={userData?.gender}
              onChange={(e) => handleInputchanages("gender", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              <option disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="roles"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Role
            </label>
            <select
              id="roles"
              name="roles"
              value={userData?.role}
              onChange={(e) => handleInputchanages("role", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              <option disabled selected>
                Select Role
              </option>
              <option value="frontend developer">Frontend Developer</option>
              <option value="backend developer">Backend Developer</option>
              <option value="fullstack developer">Fullstack Developer</option>
              <option value="mobile developer">Mobile Developer</option>
              <option value="devops engineer">DevOps Engineer</option>
              <option value="qa engineer">QA Engineer</option>
              <option value="ui/ux designer">UI/UX Designer</option>
              <option value="data scientist">Data Scientist</option>
              <option value="machine learning engineer">
                Machine Learning Engineer
              </option>
              <option value="project manager">Project Manager</option>
              <option value="product manager">Product Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              value={userData?.city}
              onChange={(e) => handleInputchanages("city", e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Experience (in years)
            </label>
            <input
              type="number"
              id="experience"
              value={userData?.experience}
              onChange={(e) =>
                handleInputchanages("experience", e.target.value)
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="linkedinLink"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedinLink"
              value={userData?.linkedinLink}
              onChange={(e) =>
                handleInputchanages("linkedinLink", e.target.value)
              }
              placeholder="https://linkedin.com/in/your-profile"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="githubLink"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              GitHub Profile
            </label>
            <input
              type="url"
              id="githubLink"
              placeholder="https://github.com/your-username"
              value={userData?.githubLink}
              onChange={(e) =>
                handleInputchanages("githubLink", e.target.value)
              }
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Bio
            </label>
            <textarea
              id="bio"
              rows="4"
              placeholder="Tell us a bit about yourself..."
              value={userData?.bio}
              onChange={(e) => handleInputchanages("bio", e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            ></textarea>
          </div>

          <div className="w-full max-w-[700px] bg-white dark:bg-gray-800 p-8 border border-gray-300 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2  ">
              Skills (Select up to 4)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {skillsList.map((skill) => (
                <label
                  key={skill}
                  className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <input
                    type="checkbox"
                    value={skill}
                    checked={selectedSkills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="accent-blue-600"
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
            {selectedSkills.length > 0 && (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Selected: {selectedSkills.join(", ")}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
