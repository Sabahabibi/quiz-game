import { Button } from "@chakra-ui/react";
import { Link } from "react-router";
import BoxCard from "../components/base/boxCard/boxCard";

export default function HomePage() {
  return (
    <BoxCard>
      <h1 className="text-5xl font-extrabold text-blue-600 text-center mb-6 animate__animated animate__fadeIn">
        QUIZ
      </h1>
      <p className="text-xl text-gray-700 opacity-90 mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Welcome To Quiz App
      </p>

      <Button
        colorScheme="blue"
        size="lg"
        mt={6}
        className="transition transform hover:scale-110 hover:bg-blue-600 duration-300 ease-in-out"
      >
        <Link to="/setupQuizPage">GET START</Link>
      </Button>
    </BoxCard>
  );
}
