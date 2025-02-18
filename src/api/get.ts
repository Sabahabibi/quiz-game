import { BASE_URL_CATEGORY, BASE_URL_QUIZ } from "./consts"; 
export const getCategoryData = async () => {
  const data = await fetch(BASE_URL_CATEGORY);
  const res = await data.json();
  return res.trivia_categories;
};

export const getQuiz = async () => {
  const data = await fetch(
    {
      count,
      category,
      difficulty,
    }`${BASE_URL_QUIZ}?amount=${count}&category=${category}&difficulty=${difficulty}`
  );
  console.log(data);
};
