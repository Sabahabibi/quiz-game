import { Box, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { Link } from "react-router";
import BoxCard from "../components/base/boxCard/boxCard";
import { QuizContext } from "../context/context";

export default function QuizPage() {
  const { quizList } = useContext(QuizContext);

  return (
    <BoxCard>
      {" "}
      <Text fontSize="2xl" fontWeight="bold" color="blue.600" mb={6}>
        Quiz Page
      </Text>
      {quizList.length > 0 ? (
        <Box className="space-y-4">
          {quizList.map((quiz, index) => (
            <Box key={index} className="mb-6">
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                {quiz.question}
              </Text>
              <Box className="space-y-2">
                {quiz.options.map((option, i) => (
                  <Button key={i} colorScheme="blue" variant="outline" w="full">
                    {option}
                  </Button>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Text>No questions available</Text>
      )}
      <Button
        colorScheme="blue"
        size="lg"
        mt={6}
        className="transition transform hover:scale-110 hover:bg-blue-600 duration-300 ease-in-out"
      >
        Next Question
      </Button>
      <Button
        colorScheme="green"
        size="lg"
        mt={6}
        className="transition transform hover:scale-110 hover:bg-green-600 duration-300 ease-in-out"
      >
        <Link to="/resultPage">Go to Result</Link>
      </Button>
    </BoxCard>
  );
}
