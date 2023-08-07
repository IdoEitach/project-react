import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/home";
import UserNamePage from "../pages/signUp/UserNamePage/userNamePage";
import EmailPage from "../pages/signUp/EmailPage/email";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<UserNamePage />} />
      <Route path="/email" element={<EmailPage />} />
    </Routes>
  );
}
export default Router;
