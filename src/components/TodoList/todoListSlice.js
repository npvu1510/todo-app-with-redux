const initalState = [
  { id: 1, name: 'Learn React', priority: 'High', completed: false },
  { id: 2, name: 'Learn Redux', priority: 'Medium', completed: true },
  { id: 3, name: 'Learn JavaScript', priority: 'Low', completed: false },
];

const todoListReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'todoList/addItem':
      return [
        ...state,
        {
          id: state.at(-1).id + 1,
          ...action.payload,
          completed: false,
        },
      ];

    case 'todoList/toggleComplete':
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    default:
      return state;
  }
};

export default todoListReducer;
