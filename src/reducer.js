export default function (state, action) {
  switch (action.type) {
    //51) добавляем case add
    case "add":
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false },
      ];
    //57) добавляем case toggle
    case "toggle":
      return state.map((book) => {
        if (book.id === action.payload) {
          book.completed = !book.completed;
        }
        return book;
      });
    //58) добавляем case delete
    case "delete":
      return state.filter((book) => {
        return book.id !== action.payload;
      });
    default:
      return state;
  }
}

//41) Импортируем редьюсер в апп
