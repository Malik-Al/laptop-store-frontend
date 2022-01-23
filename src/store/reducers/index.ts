import {combineReducers} from "redux";
import {laptopReducer} from "./laptopReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    laptop: laptopReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>