import { Button, Text } from "@chakra-ui/react";

import { Link } from "react-router";
import BoxCard from "../components/base/boxCard/boxCard";

export default function ResultPage() {
  return (
    <BoxCard>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        color="gray.700"
        mb={6}
        className="animate__animated animate__fadeIn"
      >
        This is the result page
      </Text>

      <Button
        colorScheme="blue"
        size="lg"
        mt={6}
        className="transition transform hover:scale-110 hover:bg-blue-600 duration-300 ease-in-out"
      >
        <Link to="/">Retry</Link>
      </Button>
    </BoxCard>
  );
}
