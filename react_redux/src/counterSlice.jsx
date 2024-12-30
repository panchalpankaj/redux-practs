import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
name : 'counter',
initialState,
reducers : {
    incr: (state) => {
        state.value += 1;
    },
    decre: (state) => {
        state.value -= 1;
    }
}
})

export const  {incr,decre} = counterSlice.actions;
export default counterSlice.reducer;