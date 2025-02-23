import { useReducer } from "react";
import "./App.css";
import Layout from "./components/base/layout/layout";
import { QuizContext } from "./context/context";
import { initialState, quizReducer } from "./context/quizReducer";
import AppRoutes from "./routes/routes";

function App() {
  // const [quizList, setQuizList] = useState([]);
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <>
      <QuizContext.Provider value={{ state, dispatch }}>
        <Layout>
          <AppRoutes></AppRoutes>
        </Layout>
      </QuizContext.Provider>
    </>
  );
}

export default App;
