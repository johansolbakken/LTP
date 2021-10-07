import { useEffect, useState } from "react";
import ITruck from "./truck/ITruck";
import createDummyTruck from "./truck/TruckUtil";
import { TrucksPageUI } from "./TrucksPageUI";

interface Props {
    updatedTrucks: (trucks: ITruck[]) => void;
}

export interface TruckInfo {
    imgUrl: string;
    truck: ITruck;
}

export const TrucksPage: React.FC<Props> = (props) => {
    const [trucks, setTrucks] = useState<ITruck[]>([
        createDummyTruck("Scania", "AX46758"),
        createDummyTruck("Volvo", "34EE3e"),
        createDummyTruck("Mercedes", "OP98988"),
    ]);

    useEffect(() => {
        props.updatedTrucks(trucks);
        console.log(trucks);
    }, [trucks]);

    const onClick = () => {
        const truck2 = [];
        for (let i = 0; i < trucks.length; i++) {
            truck2.push(trucks[i]);
        }
        truck2.push(
            createDummyTruck(
                "Truck " + Math.round(Math.random() * 100),
                "XC" +
                    "" +
                    Math.round(10 * Math.random()) +
                    "" +
                    Math.round(10 * Math.random()) +
                    "" +
                    Math.round(10 * Math.random()) +
                    "" +
                    Math.round(10 * Math.random()) +
                    "" +
                    Math.round(10 * Math.random())
            )
        );
        setTrucks(truck2);
    };

    return <TrucksPageUI trucks={trucks} onClick={onClick} />;
};
