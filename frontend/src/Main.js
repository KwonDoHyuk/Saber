import App from "./components/App";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import CourseListPage from "./pages/CourseListPage";
import WishlistPage from "./pages/WishlistPage";
import QuestionListPage from "./pages/QuestionListPage";
import QuestionPage from "./pages/QuestionPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            <Route path=":id" element={<QuestionPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
