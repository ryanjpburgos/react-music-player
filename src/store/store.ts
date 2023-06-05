import { configureStore } from "@reduxjs/toolkit";
import spinnerReducer from "./features/spinnerSlice";

const store = configureStore({
	reducer: {
		spinner: spinnerReducer,
	},
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
