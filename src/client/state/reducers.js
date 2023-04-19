import { combineReducers } from "redux";
import usersReducer from "./reducers/usersReducer";
import authReducers from "./reducers/authReducer";

const reducers = combineReducers({
  users: usersReducer,
  auth: authReducers
});

export default reducers;
