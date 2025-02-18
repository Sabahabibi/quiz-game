import { Button } from "@chakra-ui/react";
import { Link } from "react-router";

export default function ResultPage() {
  return (
    <div>
      <p>this is result page</p>
      <Button>
        <Link to="/">retry</Link>
      </Button>
    </div>
  );
}
