
export const addTruck = (obj) => {
    return (dispatch) => dispatch({
        type:"addTruck",
        payload: obj
    });
}

export const removeTruck = (obj) => {
    return (dispatch) => dispatch({
        type:"removeTruck",
        payload: obj
    });
}

export const removeAll = () => {
    return (dispatch) => dispatch({
        type:"removeAll",
        payload: null
    });
}