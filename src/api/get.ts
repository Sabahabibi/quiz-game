import axios from "axios";
import { BASE_URL_CATEGORY, BASE_URL_QUIZ } from "./consts";

export const getCategoryData = async () => {
  try {
    const response = await axios.get(BASE_URL_CATEGORY);
    return response.data.trivia_categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export const getQuiz = async (count, category, difficulty) => {
  try {
    const response = await axios.get(BASE_URL_QUIZ, {
      params: {
        amount: count,
        category: category,
        difficulty: difficulty,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching quiz:", error);
    throw error;
  }
};
