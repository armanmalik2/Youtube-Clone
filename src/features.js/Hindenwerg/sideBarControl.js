import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen : true,
};

export const Slice = createSlice({
    name:"sidebar",
    initialState,
    reducers:{
        toggleSidebar: state => {
            state.isOpen = !state.isOpen;
        },
        hideSidebar: state => {
            state.isOpen = false
        },
        showSidebar: state => {
            state.isOpen = true
        }
    }
})

export const { toggleSidebar ,hideSidebar , showSidebar } = Slice.actions;
export default Slice.reducer;