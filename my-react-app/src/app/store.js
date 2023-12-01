import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import userReducer from "../features/userSlice";

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

export default configureStore({
  reducer: { rootReducer, user: userReducer },
});
