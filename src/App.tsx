import { useState } from "react";
import "./App.css";
import { QuizContext } from "./context/context";
import AppRoutes from "./routes/routes";

function App() {
  const [quizList, setQuizList] = useState([]);
  return (
    <>
      <QuizContext.Provider value={{ quizList, setQuizList }}>
        <AppRoutes></AppRoutes>
      </QuizContext.Provider>
    </>
  );
}

export default App;
