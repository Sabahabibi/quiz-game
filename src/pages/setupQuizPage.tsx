import { Button, Input, Select, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCategoryData, getQuiz } from "../api/get";
import BoxCard from "../components/base/boxCard/boxCard";
import { QuizContext } from "../context/context";

interface Category {
  id: string;
  name: string;
}

export default function SetUpQuizPage() {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const { dispatch } = useContext(QuizContext);

  const [count, setCount] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [errors, setErrors] = useState({
    count: "",
    category: "",
    difficulty: "",
  });

  useEffect(() => {
    getCategoryData()
      .then((res: Category[]) => setCategoryList(res))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const validateInputs = () => {
    let newErrors = { count: "", category: "", difficulty: "" };
    let isValid = true;

    if (!count) {
      newErrors.count = "Enter the number of questions";
      isValid = false;
    } else if (isNaN(Number(count)) || Number(count) <= 0) {
      newErrors.count = "Enter a valid number";
      isValid = false;
    }

    if (!category) {
      newErrors.category = "Select a category";
      isValid = false;
    }

    if (!difficulty) {
      newErrors.difficulty = "Select a difficulty level";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const quizStartHandler = (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    getQuiz(count, category, difficulty)
      .then((res) => {
        dispatch({ type: "SET_QUIZ_LIST", payload: res });
        navigate("/quizPage");
      })
      .catch((error) => console.error("Error starting quiz:", error));
  };

  return (
    <BoxCard>
      <h1 className="text-5xl font-extrabold text-blue-600 text-center mb-6">
        QUIZ
      </h1>
      <Text fontSize="xl" textAlign="center" mb={6}>
        Setup Your Quiz
      </Text>
      <form onSubmit={quizStartHandler} className="space-y-4">
        <div>
          <Input
            type="number"
            name="count"
            placeholder="Number of Questions"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="border p-2 rounded-lg"
          />
          {errors.count && (
            <Text color="red.400" fontSize="sm" fontFamily="monospace" ml={2}>
              {errors.count}
            </Text>
          )}
        </div>

        <div>
          <Select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded-lg"
          >
            <option value="">Select a Category</option>
            {categoryList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
          {errors.category && (
            <Text color="red.400" fontSize="sm" fontFamily="monospace" ml={2}>
              {errors.category}
            </Text>
          )}
        </div>

        <div>
          <Select
            name="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="border p-2 rounded-lg"
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
          {errors.difficulty && (
            <Text color="red.400" fontSize="sm" fontFamily="monospace" ml={2}>
              {errors.difficulty}
            </Text>
          )}
        </div>

        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          width="full"
          className="mt-6 transition transform hover:scale-110 hover:bg-blue-600 duration-300 ease-in-out"
        >
          Start Quiz
        </Button>
      </form>
    </BoxCard>
  );
}
