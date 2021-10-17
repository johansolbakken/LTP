
const reducer = (state = { 
    name: "No truck",
    license: "no license",
    type:2,
    axleDistances: [1, 1, 1],
    allowedPayload: 0,
    axleLoad: [1, 1],
    deadWeight: [1, 1]
}, action) => {
    switch (action.type) {
        case "setName":
            return { ...state, name: action.payload };
        default:
            return state;
    }
}

export default reducer;