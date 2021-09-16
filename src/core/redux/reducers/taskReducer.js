const initialState = [
  {
    id: 1,
    text: "firstTaskText",
    completed: false,
  },
  {
    id: 2,
    text: "secondTaskText",
    completed: true,
  },
];
const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:

    default:
      return state;
  }
};

export default tasks;
