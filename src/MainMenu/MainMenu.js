import React from "react";
import MainMenuContainer from "./MainMenuContainer";

export default class MainMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    sayHello() {
        console.log("Hello");
    }

    render() {
        return (
            <div>
                <MainMenuContainer func={this.sayHello} />
            </div>
        );
    }
}
