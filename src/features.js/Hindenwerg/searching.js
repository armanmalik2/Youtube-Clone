import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    search : "Doraemon"
};

export const searchSlice = createSlice({
    name:"searching",
    initialState,
    reducers:{
        searchQueri: (state,action) => {
            state.search = action.payload;
        },
    }
})

export const { searchQueri } = searchSlice.actions;
export default searchSlice.reducer;