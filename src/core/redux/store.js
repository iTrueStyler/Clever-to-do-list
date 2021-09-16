import { applyMiddleware, combineReducers, createStore } from "redux";
import tasks from "./reducers/taskReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  taskReducer: tasks,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
