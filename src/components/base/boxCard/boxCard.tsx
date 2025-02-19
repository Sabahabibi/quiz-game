import { Box } from "@chakra-ui/react";

const BoxCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center justify-center w-[480px] h-[440px] transform transition duration-500 ease-in-out hover:scale-105">
      {children}
    </Box>
  );
};

export default BoxCard;
