import { useState } from "react";
import "./App.css";
import Layout from "./components/base/layout/layout";
import { QuizContext } from "./context/context";
import AppRoutes from "./routes/routes";

function App() {
  const [quizList, setQuizList] = useState([]);
  return (
    <>
      <QuizContext.Provider value={{ quizList, setQuizList }}>
        <Layout>
          <AppRoutes></AppRoutes>
        </Layout>
      </QuizContext.Provider>
    </>
  );
}

export default App;
