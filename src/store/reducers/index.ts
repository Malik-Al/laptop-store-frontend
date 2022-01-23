import {combineReducers} from "redux";
import {laptopReducer} from "./laptopReducer";

export const rootReducer = combineReducers({
    laptop: laptopReducer
})

export type RootState = ReturnType<typeof rootReducer>