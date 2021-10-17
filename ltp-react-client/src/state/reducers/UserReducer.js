const initialState = {
    username: "",
    name: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    zip: "",
    country: ""
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "setUsername":
            return {...state, username:action.payload};
        case "setName":
            return {...state, name:action.payload};
        case "setPhone":
            return {...state, phone:action.payload};
        case "setEmail":
            return {...state, email:action.payload};
        case "setStreet":
            return {...state, street:action.payload};
        case "setZip":
            return {...state, zip:action.payload};
        case "setCity":
            return {...state, city:action.payload};
        case "setCountry":
            return {...state, country:action.payload};
        case "setUser":
            return action.payload;
        default:
            return state;
    }
}

export default reducer;