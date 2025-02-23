import { Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router";
import BoxCard from "../components/base/boxCard/boxCard";
import { QuizContext } from "../context/context";

export default function ResultPage() {
  const { state } = useContext(QuizContext);

  const correctAnswers = state.selectedAnswers.filter(
    (answer) => answer.isCorrect
  ).length;
  const totalQuestions = state.quizList.length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <BoxCard>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="blue.600"
        textAlign="center"
      >
        Your Score: {score}%
      </Text>
      <Text fontSize="lg" color="gray.600" textAlign="center" mt={4}>
        You got {correctAnswers} out of {totalQuestions} correct.
      </Text>
      <Link to="/">
        <Button
          colorScheme="green"
          size="lg"
          mt={6}
          className="transition transform hover:scale-110 hover:bg-green-600 duration-300 ease-in-out"
        >
          Retry
        </Button>
      </Link>
    </BoxCard>
  );
}
