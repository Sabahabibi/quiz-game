import { useNavigate } from "react-router";

export default function SetUpQuizPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>this is setup quiz page</p>
      <p>lets start quiz</p>
      <button onClick={() => navigate("/quizPage")}>go to quiz</button>
    </div>
  );
}
