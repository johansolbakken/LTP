import ITruck from "../truck/ITruck";

interface Props {
    truck: ITruck;
}

export const TruckSummary: React.FC<Props> = (props) => {
    const formatNumber = (n: number) => {
        return n === 0 ? "-" : "" + n;
    };
    return (
        <table>
            <tr>
                <th>Nøkkel</th>
                <th>Verdi</th>
            </tr>
            <tr>
                <td>Akselavstander</td>
                <td>
                    {formatNumber(
                        props.truck.getVehicleCard().getFrontAxleDistance()
                    )}
                    /
                    {formatNumber(
                        props.truck.getVehicleCard().getMidAxleDistance()
                    )}
                    /
                    {formatNumber(
                        props.truck.getVehicleCard().getBackAxleDistance()
                    )}
                </td>
            </tr>
            <tr>
                <td>Tillatt nyttelast</td>
                <td>
                    {formatNumber(
                        props.truck.getVehicleCard().getAllowedPayload()
                    )}
                </td>
            </tr>
            <tr>
                <td>Tillatt aksellast</td>
                <td>
                    {formatNumber(
                        props.truck.getVehicleCard().getAllowedAxleLoadFront()
                    )}
                    /
                    {formatNumber(
                        props.truck.getVehicleCard().getAllowedAxleLoadBack()
                    )}
                </td>
            </tr>
            <tr>
                <td>Egenvekt aksel</td>
                <td>
                    {formatNumber(
                        props.truck.getVehicleCard().getDeadWeightFront()
                    )}
                    /
                    {formatNumber(
                        props.truck.getVehicleCard().getDeadWeightBack()
                    )}
                </td>
            </tr>
        </table>
    );
};
