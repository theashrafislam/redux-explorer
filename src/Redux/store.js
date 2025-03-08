import {configureStore} from '@reduxjs/toolkit';
import counter from './counterSlice';

// Creating the Redux store
export const store = configureStore({
    reducer: {
        // Registering the counter reducer under the "counter" key in the global state
        counter: counter
    }
});