import TreeReducer from "./TreeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    tree: TreeReducer
});

export default rootReducer;