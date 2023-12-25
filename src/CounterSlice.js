import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:0,
    data:[],

}

export const CounterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.value+= 1
        },
        decrement: (state)=>{
                state.value-=1
        },
        update:(state,actions)=>{
            state.data=actions.payload
        }
    }
})

export const {increment,decrement,update} = CounterSlice.actions

export default CounterSlice.reducer