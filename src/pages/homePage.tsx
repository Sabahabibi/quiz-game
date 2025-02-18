import { Button } from "@chakra-ui/react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      <h1>QUIZ</h1>
      <h4>Welcome To Quiz App</h4>

      <Button>
        <Link to="setupQuizPage">GET START</Link>
      </Button>
    </div>
  );
}
