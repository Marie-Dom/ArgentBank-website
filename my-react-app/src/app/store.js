import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: { rootReducer, user: userReducer },
});
