import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginpage";
import SignUpPage from "../pages/signupPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
