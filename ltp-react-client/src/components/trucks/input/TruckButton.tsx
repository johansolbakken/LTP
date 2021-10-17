import ITruck from "../../../model/truck/ITruck";

interface Props {
    name: string;
    truck: ITruck;
    onClick: (truck: ITruck) => void;
}

export const TruckButton: React.FC<Props> = (props) => {
    return (
        <div className="truckButton">
            <button
                onClick={() => {
                    props.onClick(props.truck);
                }}
            >
                {props.name}
            </button>
        </div>
    );
};
