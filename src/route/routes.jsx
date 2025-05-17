import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginpage";
import SignUpPage from "../pages/signupPage";
import ForgotPasswordPage from "../pages/forgotPasswordPage";
import UserProfile from "../pages/userProfile";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
