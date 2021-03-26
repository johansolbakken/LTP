import React from "react";
import Banner from "../shared/Banner";
import BigSquareButton from "../shared/BigSquareButton";
import Button from "../shared/Button";

const MainMenuContainer = (props) => {
    let title = "Main Menu";

    return (
        <div style={mainMenuStyle}>
            <Banner text="Hovedmeny" />
            <div>
                <div style={rowStyle}>
                    <BigSquareButton
                        text="Regn ut LTP"
                        onClick={props.func}
                        imgSrc="https://icons-for-free.com/iconfiles/png/512/calculator-131964784712013007.png"
                        imgAlt="Kalkulator"
                    />
                    <BigSquareButton
                        text="Dine vogner"
                        onClick={props.func}
                        imgSrc="https://image.flaticon.com/icons/png/512/45/45880.png"
                        imgAlt="Lastebil"
                    />
                </div>
                <div style={rowStyle}>
                    <BigSquareButton
                        text="Din bruker"
                        onClick={props.func}
                        imgSrc="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
                        imgAlt="Bruker"
                    />
                    <BigSquareButton
                        text="Info om LTP"
                        onClick={props.func}
                        imgSrc="https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png"
                        imgAlt="Info"
                    />
                </div>
            </div>
        </div>
    );
};

const mainMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
};

const rowStyle = {
    display: "flex"
}

export default MainMenuContainer;
