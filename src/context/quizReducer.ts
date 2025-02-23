export const initialState = {
  currentQuestionIndex: 0,
  selectedAnswers: [],
  quizList: [],
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUIZ_LIST":
      return { ...state, quizList: action.payload };

    case "SELECT_ANSWER":
      const existingAnswerIndex = state.selectedAnswers.findIndex(
        (item) => item.questionIndex === state.currentQuestionIndex
      );

      const updatedAnswers = [...state.selectedAnswers];

      const newAnswer = {
        questionIndex: state.currentQuestionIndex,
        answer: action.payload.answer,
        isCorrect: action.payload.isCorrect,
      };

      if (existingAnswerIndex !== -1) {
        updatedAnswers[existingAnswerIndex] = newAnswer;
      } else {
        updatedAnswers.push(newAnswer);
      }

      return {
        ...state,
        selectedAnswers: updatedAnswers,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };

    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};
