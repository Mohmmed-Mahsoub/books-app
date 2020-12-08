import uuid from "react-uuid";
export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_book":
      return [
        ...state,
        {
          title: action.bookPayload.title,
          author: action.bookPayload.author,
          id: uuid(),
        },
      ];
    case "DEL_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
