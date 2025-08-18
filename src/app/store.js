import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features.js/Hindenwerg/sideBarControl";
import searchReducer from "../features.js/Hindenwerg/searching";

export const store = configureStore({
    reducer : {
        sideBar:sidebarReducer,
        searching:searchReducer,
    }
});