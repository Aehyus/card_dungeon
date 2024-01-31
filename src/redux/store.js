import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./manageInventory.js";
import manageDiscoveredItemsReducer from "./manageDiscoveredItems.js";

export default configureStore({
    reducer: {
        manageDiscoveredItems: manageDiscoveredItemsReducer,
        inventory: inventoryReducer
    }
})