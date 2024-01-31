import { createSlice } from "@reduxjs/toolkit";

export const manageDiscoveredItemsSlice = createSlice({ 
    name: 'manageDiscoveredItems',
    initialState: {
        items: [],
        searchedItemsNum: 3,
        value: 0
    },
    reducers: { 
        increment: (state) => {
            state.value += 1
        },
        setDiscoveredItems: (state, action) => {
            state.items = action.payload

        },
        increaseSearchedItems: (state, action) => {

            state.searchedItemsNum = state.searchedItemsNum + action.payload;
            
        },
    }

});

export const { setDiscoveredItems, increaseSearchedItems } = manageDiscoveredItemsSlice.actions;

export default manageDiscoveredItemsSlice.reducer;