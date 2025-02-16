import { useNavigate } from "react-router";

export default function QuizPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>this is quiz page </p>
      <button onClick={() => navigate("/resultPage")}>go to quiz</button>
    </div>
  );
}
