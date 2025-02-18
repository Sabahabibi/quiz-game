import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCategoryData, getQuiz } from "../api/get";

export default function SetUpQuizPage() {
  const navigate = useNavigate();
  const [category, setcategory] = useState([]);

  useEffect(() => {
    getCategoryData().then((res) => setcategory(res));
  }, []);
  const quizStartHandler = (e) => {
    e.preventDefault();
    const { count, category, difficulty } = e.target;
    getQuiz(count.value, category.value, difficulty.value);
  };
  return (
    <div>
      <h1>QUIZ</h1>
      <p>Setup Quiz</p>
      <p>Let's start quiz</p>
      <form onSubmit={quizStartHandler}>
        <input type="number" name="count" placeholder="count" />
        <select name="category">
          {category.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
        <select name="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <Button type="submit" onClick={() => navigate("")}>
          start
        </Button>
        <button onClick={() => navigate("/quizPage")} type="submit">
          start
        </button>
      </form>
    </div>
  );
}
