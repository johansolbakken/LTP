import { Calculator } from "../calculator/Calculator";
import { Home } from "../homepage/Home";
import { NavigatorUI } from "./NavigatorUI";

export const Navigator = () => {
    const calc = <Calculator />
    const home = <Home />;
    const user = <div></div>;
    const trucks = <div></div>;
    return <NavigatorUI home={home} user={user} trucks={trucks} calc={calc} />;
}