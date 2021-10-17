export const setName = (name) => {
    return (dispatch) => dispatch({
        type:"setName",
        payload:name
    });
}

export const setUsername = (username) => {
    return (dispatch) => dispatch({
        type:"setUsername",
        payload:username
    });
}

export const setPhone = (phone) => {
    return (dispatch) => dispatch({
        type:"setPhone",
        payload:phone
    });
}

export const setEmail = (email) => {
    return (dispatch) => dispatch({
        type:"setEmail",
        payload:email
    });
}

export const setStreet = (street) => {
    return (dispatch) => dispatch({
        type:"setStreet",
        payload:street
    });
}

export const setZip = (zip) => {
    return (dispatch) => dispatch({
        type:"setZip",
        payload:zip
    });
}

export const setCity = (city) => {
    return (dispatch) => dispatch({
        type:"setCity",
        payload:city
    });
}

export const setCountry = (country) => {
    return (dispatch) => dispatch({
        type:"setCountry",
        payload:country
    });
}

export const setUser = (user) => {
    return (dispatch) => dispatch({
        type:"setUser",
        payload:user
    });
}