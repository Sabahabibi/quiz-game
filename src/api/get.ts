import axios from "axios";
import { BASE_URL_CATEGORY, BASE_URL_QUIZ } from "./consts";

export const getCategoryData = async () => {
  try {
    const response = await axios.get(BASE_URL_CATEGORY); // فراخوانی API با Axios
    return response.data.trivia_categories; // برگرداندن داده‌ها
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export const getQuiz = async (count, category, difficulty) => {
  try {
    // ساخت URL با استفاده از Query Parameters
    const response = await axios.get(BASE_URL_QUIZ, {
      params: {
        amount: count,
        category: category,
        difficulty: difficulty,
      },
    });

    // برگرداندن نتایج
    return response.data.results;
  } catch (error) {
    console.error("Error fetching quiz:", error);
    throw error;
  }
};
