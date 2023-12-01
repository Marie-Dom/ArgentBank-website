import { combineReducers } from "redux";
import userReducer from "../features/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  // ... d'autres reducers si vous en avez
});

export default rootReducer;
