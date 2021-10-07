import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navigator.css"

interface Props {
    home: any;
    user: any;
    trucks: any;
    calc: any;
}

export const NavigatorUI: React.FC<Props> = (props) => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Hjem</Link>
                        </li>
                        <li>
                            <Link to="/calculator">Kalkulator</Link>
                        </li>
                        <li>
                            <Link to="/trucks">Lastebiler</Link>
                        </li>
                        <li>
                            <Link to="/user">Bruker</Link>
                        </li>
                    </ul>
                </nav>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center"
                }}>
                    <Switch>
                    <Route path="/trucks">{props.trucks}</Route>
                    <Route path="/user">{props.user}</Route>
                    <Route path="/calculator">{props.calc}</Route>
                    <Route path="/">{props.home}</Route>
                </Switch>
                </div>
            </div>
        </Router>
    );
}