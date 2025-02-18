import { Button } from "@chakra-ui/react";
import { Link } from "react-router";

export default function QuizPage() {
  return (
    <div>
      <p>this is quiz page </p>

      <Button>
        <Link to="/resultPage">go to result</Link>
      </Button>
    </div>
  );
}
