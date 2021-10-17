import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ITruck from "../../model/truck/ITruck";
import { TruckObject } from "../../model/truck/TruckObject";
import createDummyTruck, { createTruckFromObject } from "../../model/truck/TruckUtil";
import { TrucksPageUI } from "./TrucksPageUI";

interface Props {
}

export interface TruckInfo {
    imgUrl: string;
    truck: ITruck;
}

export const TrucksPage: React.FC<Props> = (props) => {
    const state:any = useSelector((state) => state);
    const listOfTrucks:TruckObject[] = state.listOfTrucks;
    const [trucks, setTrucks] = useState<ITruck[]>([]);

    useEffect(()=>{
        const list: ITruck[] = [];
        for (let i = 0; i < listOfTrucks.length; i++) {
            list.push(createTruckFromObject(listOfTrucks[i]));
        }
        setTrucks(list);
    }, [listOfTrucks])

    const onClick = () => {
        const list: ITruck[] = [...trucks];
        list.push(
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
        setTrucks(list);
    };

    return <TrucksPageUI trucks={trucks} onClick={onClick} />;
};
