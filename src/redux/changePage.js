import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pageRank: 0
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        increment: state => {
            state.pageInfos.value += 1
        },
        changePage: (state, action) => {
            state.pageRank = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { changePage, increment } = pageSlice.actions

export default pageSlice.reducer