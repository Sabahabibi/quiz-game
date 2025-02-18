import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router";
import { QuizContext } from "../context/context";

export default function QuizPage() {
  const { quizList } = useContext(QuizContext);
  console.log(quizList);
  return (
    <div>
      <p>this is quiz page </p>

      <Button>
        <Link to="/resultPage">go to result</Link>
      </Button>
    </div>
  );
}
