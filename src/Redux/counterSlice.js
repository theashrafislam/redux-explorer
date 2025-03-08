import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    // Initial state with value 0
    initialState: { value: 1 },
    reducers: {
        increment: (state) => {
            // Increases value by 1
            state.value += 1;
        },
        // Decreases value by 1
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            // Multiplies the value by action.payload
            state.value *= action.payload
        },
        reset: (state) => {
            state.value = 0
        }
    }
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;