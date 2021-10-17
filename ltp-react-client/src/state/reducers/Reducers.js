import { combineReducers } from "redux";
import TruckReducer from "./TruckReducer";
import TruckListReducer from "./TruckListReducer";
import UserReducer from './UserReducer';

const reducers = combineReducers({
    currentTruck: TruckReducer,
    listOfTrucks: TruckListReducer,
    user: UserReducer
});

export default reducers;