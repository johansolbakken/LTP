const reducer = (state = [], action) => {
    switch (action.type) {
        case "addTruck":
            return [...state, action.payload];
        case "removeAll":
            return [];
        case "removeTruck":
            return state.filter(truck => truck !== action.payload);
        default:
            return state;
    }
}

export default reducer;