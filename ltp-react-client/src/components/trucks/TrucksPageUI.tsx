import { useEffect } from "react";
import { TruckButton } from "./input/TruckButton";
import ITruck from "./truck/ITruck";
import "./TrucksPage.css";

interface Props {
    trucks: ITruck[];
    onClick: () => void;
}

export const TrucksPageUI: React.FC<Props> = (props) => {
    let table = [];

    for (let i = 0; i < props.trucks.length; i++) {
        const truck = props.trucks[i];
        table.push(
            <tr>
                <td>
                    <img
                        src="https://www.elefun.no/aspx/resize.aspx?W=1100&file=../bilder/produktbilder/38932/38932_2.jpg"
                        style={{ width: 100 }}
                    />
                </td>
                <td>
                    <span className="name">{truck.getName()}</span>
                    <span className="license">{truck.getLicencePlate()}</span>
                </td>
                <td>
                    <TruckButton
                        name="Bruk"
                        onClick={() => {}}
                        truck={props.trucks[i]}
                    />
                    <TruckButton
                        name="Rediger"
                        onClick={() => {}}
                        truck={props.trucks[i]}
                    />
                    <TruckButton
                        name="Slett"
                        onClick={() => {}}
                        truck={props.trucks[i]}
                    />
                </td>
            </tr>
        );
    }

    return (
        <div className="trucksPage">
            <h1>Lastebiler</h1>
            <button onClick={props.onClick}>Add</button>
            <table>{table}</table>
        </div>
    );
};
