import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginpage";
import SignUpPage from "../pages/signupPage";
import ForgotPasswordPage from "../pages/forgotPasswordPage";
import UserProfile from "../pages/userProfile";
import NoPage from "../section/nopage";
import EditProfile from "../pages/EditProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/user/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
