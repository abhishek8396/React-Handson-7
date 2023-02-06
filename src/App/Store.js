import {configureStore} from '@reduxjs/toolkit'

import dataReducer from '../Features/Counter/CounterSlice'

const store = configureStore({
    reducer:{
        dataKey: dataReducer
    }
});

export default store;