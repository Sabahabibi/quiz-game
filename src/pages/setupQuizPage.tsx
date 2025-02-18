import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { getCategoryData, getQuiz } from "../api/get";
import { QuizContext } from "../context/context";

interface Category {
  id: string;
  name: string;
}

export default function SetUpQuizPage() {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const { setQuizList } = useContext(QuizContext);

  useEffect(() => {
    getCategoryData()
      .then((res: Category[]) => setCategoryList(res))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const quizStartHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const count = formData.get("count");
    const category = formData.get("category");
    const difficulty = formData.get("difficulty");

    console.log("Selected Count:", count);
    console.log("Selected Category:", category);
    console.log("Selected Difficulty:", difficulty);

    if (!count || !category || !difficulty) {
      console.error("Some fields are missing:", {
        count,
        category,
        difficulty,
      });
      return;
    }

    getQuiz(count, category, difficulty)
      .then((res) => {
        setQuizList(res);
        navigate("/quizPage");
      })
      .catch((error) => console.error("Error starting quiz:", error));
  };

  return (
    <div>
      <h1>QUIZ</h1>
      <p>Setup Quiz</p>
      <p>Let's start quiz</p>
      <form onSubmit={quizStartHandler}>
        <input type="number" name="count" placeholder="count" required />

        <select name="category" required>
          <option value="">Select a category</option>
          {categoryList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <select name="difficulty" required>
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <Button type="submit">Start</Button>
      </form>
    </div>
  );
}
