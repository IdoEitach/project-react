import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/home";
import UserNamePage from "../pages/signUp/UserNamePage/userNamePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<UserNamePage />} />
    </Routes>
  );
}
export default Router;
