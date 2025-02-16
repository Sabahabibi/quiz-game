import { Route, Routes } from "react-router";
import HomePage from "../pages/homePage";
import QuizPage from "../pages/quizPage";
import ResultPage from "../pages/resultPage";
import SetUpQuizPage from "../pages/setupQuizPage";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="quizPage" element={<QuizPage />} />
        <Route path="setupQuizPage" element={<SetUpQuizPage />} />
        <Route path="resultPage" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
