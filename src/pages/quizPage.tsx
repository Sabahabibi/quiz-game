import { Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router";
import BoxCard from "../components/base/boxCard/boxCard";
import { QuizContext } from "../context/context";

export default function QuizPage() {
  const { state, dispatch } = useContext(QuizContext);
  const [answers, setAnswers] = useState([]);
  const currentQuestion = state.quizList[state.currentQuestionIndex];

  const handleAnswerSelection = (answer) => {
    dispatch({
      type: "SELECT_ANSWER",
      payload: {
        answer: answer,
        isCorrect: answer === currentQuestion.correct_answer,
      },
    });
  };

  const handleNextQuestion = () => {
    if (state.currentQuestionIndex < state.quizList.length - 1) {
      dispatch({ type: "NEXT_QUESTION" });
    } else {
      console.log("Quiz Completed!");
    }
  };

  const handlePreviousQuestion = () => {
    console.log("Current Index:", state.currentQuestionIndex);
    if (state.currentQuestionIndex > 0) {
      dispatch({ type: "PREVIOUS_QUESTION" });
    }
  };

  return (
    <BoxCard>
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="blue.700"
        mb={12}
        textAlign="center"
      >
        Question {state.currentQuestionIndex + 1} of {state.quizList.length}
      </Text>
      <Text fontSize="xl" fontWeight="medium" color="blue.600" mb={6}>
        {currentQuestion ? currentQuestion.question : "Loading..."}
      </Text>
      <RadioGroup onChange={handleAnswerSelection} value={state.selectedAnswer}>
        <Stack direction="row" className="flex flex-wrap gap-2">
          {[
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer,
          ].map((option, index) => (
            <Radio
              key={index}
              value={option}
              className={`px-2 py-1 border rounded-md text-xs cursor-pointer transition-all duration-300 flex items-center space-x-1
              ${
                state.selectedAnswer === option
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-100 hover:bg-blue-100"
              }`}
            >
              {option}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>

      <Stack direction="row" spacing={10} justify="center" mt={12}>
        <Button
          colorScheme="blue"
          size="sm"
          className="transition transform hover:scale-110 hover:bg-blue-600 duration-300 ease-in-out"
          onClick={handlePreviousQuestion}
          isDisabled={state.currentQuestionIndex === 0}
        >
          Previous Question
        </Button>

        <Button
          colorScheme="blue"
          size="sm"
          className="transition transform hover:scale-110 hover:bg-blue-600 duration-300 ease-in-out"
          onClick={handleNextQuestion}
        >
          {state.currentQuestionIndex === state.quizList.length - 1 ? (
            <Link
              to={{
                pathname: "/resultPage",
                state: { answers },
              }}
            >
              Submit
            </Link>
          ) : (
            "Next Question"
          )}
        </Button>
      </Stack>
    </BoxCard>
  );
}
