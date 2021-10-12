import Address from "../address/Address"

interface Props {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: Address;
}

export const UserInfo: React.FC<Props> = (props) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Brukernavn</td>
                    <td>{props.username}</td>
                </tr>
                <tr>
                    <td>Fornavn</td>
                    <td>{props.firstName}</td>
                </tr>
                <tr>
                    <td>Etternavn</td>
                    <td>{props.lastName}</td>
                </tr>
                <tr>
                    <td>Epost</td>
                    <td>{props.email}</td>
                </tr>
                <tr>
                    <td>Telefon</td>
                    <td>{props.phone}</td>
                </tr>
                <tr>
                    <td>Adresse</td>
                    <td>{props.address.toString()}</td>
                </tr>
            </table>
        </div>
    );
}