import { useNavigate } from "react-router";

export default function ResultPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>this is result page</p>
      <button onClick={() => navigate("/")}>retry / go to home</button>
    </div>
  );
}
