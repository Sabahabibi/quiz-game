import { Button, Input, Select, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { getCategoryData, getQuiz } from "../api/get";
import BoxCard from "../components/base/boxCard/boxCard";
import { QuizContext } from "../context/context";

interface Category {
  id: string;
  name: string;
}

export default function SetUpQuizPage() {
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
      })
      .catch((error) => console.error("Error starting quiz:", error));
  };

  return (
    <BoxCard>
      <h1 className="text-5xl font-extrabold text-blue-600 text-center mb-6 animate__animated animate__fadeIn">
        QUIZ
      </h1>
      <Text fontSize="xl" textAlign="center" mb={6}>
        Setup Your Quiz
      </Text>
      <form onSubmit={quizStartHandler} className="space-y-4">
        <Input
          type="number"
          name="count"
          placeholder="Number of Questions"
          required
          className="border p-2 rounded-lg"
        />

        <Select name="category" required className="border p-2 rounded-lg">
          <option value="">Select a Category</option>
          {categoryList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Select>

        <Select name="difficulty" required className="border p-2 rounded-lg">
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
        <Link to="/quizPage">
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            width="full"
            className="mt-6 transition transform hover:scale-110 hover:bg-blue-600 duration-300 ease-in-out"
          >
            Start Quiz
          </Button>
        </Link>
      </form>
    </BoxCard>
  );
}
