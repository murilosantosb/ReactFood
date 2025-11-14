import { combineReducers } from "redux";

// Slices
import categoryReducer from "./slices/categorySlice";

const rootReducer = combineReducers({categoryReducer});

export default rootReducer;