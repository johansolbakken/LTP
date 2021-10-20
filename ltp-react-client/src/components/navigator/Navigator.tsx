import { useState } from "react";
import { Calculator } from "../calculator/Calculator";
import { Home } from "../homepage/Home";
import ITruck from "../../model/truck/ITruck";
import { TrucksPage } from "../trucks/TrucksPage";
import { UserPage } from "../userpage/UserPage";
import { NavigatorUI } from "./NavigatorUI";
import { Signup } from "../login/Signup";

export const Navigator = () => {
    const calc = <Calculator />;
    const home = <Home />;
    const trucks = <TrucksPage />;
    const user = <UserPage />;
    return (
        <NavigatorUI home={home} user={user} trucks={trucks} calc={calc} />
    );
}