import { MenuOption } from "./MenuOption/MenuOption";
import "./Home.css"

export const HomeUI = () => {
    return (
        <div>
            <h1>Hjem</h1>
            <div
                className="menu"
            >
                <MenuOption
                    url={"calculator"}
                    imgUrl={
                        "https://cdn.iconscout.com/icon/free/png-256/calculator-3020700-2513257.png"
                    }
                    title={"Kalkulator"}
                />
                <MenuOption
                    url={"trucks"}
                    imgUrl={
                        "https://www.iconpacks.net/icons/1/free-truck-icon-1058-thumb.png"
                    }
                    title={"Lastebiler"}
                />
                <MenuOption
                    url={"user"}
                    imgUrl={
                        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    }
                    title={"Bruker"}
                />
            </div>
        </div>
    );
}