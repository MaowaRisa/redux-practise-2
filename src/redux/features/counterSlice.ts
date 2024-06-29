import {createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

type CounterType = {
    count: number
}
const initialState: CounterType = {count: 0};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.count += 1;
        },
        decrement: (state )=>{
            state.count -= 1;
        },
        incrementByValue: (state, action : PayloadAction<Record<string, number>> )=>{
            state.count += action.payload.value; // Need to check what we are sending 
        },
    }
});
 export const {decrement, increment, incrementByValue} = counterSlice.actions;
 export default counterSlice.reducer