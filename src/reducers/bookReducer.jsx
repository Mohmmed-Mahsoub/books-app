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
  }
};
