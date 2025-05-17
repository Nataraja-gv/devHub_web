import React, { useEffect } from "react";
import NavBar from "./navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../services/profile/getProfile";
import { addUser } from "../utils/features/userSlice";

const MainLayout = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserProfile();
        if (res?.data) {
          dispatch(addUser(res.data));
        } else {
          // navigate("/login");
        }
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        navigate("/login");
      }
    };

    if (!user?.userName) {
      fetchUser();
    }
  }, [user?.userName, dispatch, navigate]);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
