import { createSlice } from "@reduxjs/toolkit"
const SearchSlice = createSlice({
    name: "search",
    initialstate: [],
    reducers: {
        search(state, action) {
            return state.filter((item) => item.id === action.payload)
        }
    }
})
export const {search} = SearchSlice.actions;
export default SearchSlice.reducer