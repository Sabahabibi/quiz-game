import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <p> this is home page </p>
      <button onClick={() => navigate("setupQuizPage")}>
        go to setup quiz
      </button>
    </div>
  );
}
