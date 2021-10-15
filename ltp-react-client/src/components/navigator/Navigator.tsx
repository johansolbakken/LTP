import { useState } from "react";
import { Calculator } from "../calculator/Calculator";
import { Home } from "../homepage/Home";
import ITruck from "../trucks/truck/ITruck";
import { TrucksPage } from "../trucks/TrucksPage";
import { UserPage } from "../userpage/UserPage";
import { NavigatorUI } from "./NavigatorUI";

export const Navigator = () => {
    const [truckList, setTruckList] = useState<ITruck[]>([]);
    const updateTrucks = (trucks: ITruck[]) => { setTruckList(trucks); }

    const calc = <Calculator trucks={truckList} />;
    const home = <Home />;
    const trucks = <TrucksPage updatedTrucks={updateTrucks} />;
    const user = <UserPage />;
    return (
        <NavigatorUI home={home} user={user} trucks={trucks} calc={calc} />
    );
}