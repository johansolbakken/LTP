import { MenuOption } from "./MenuOption/MenuOption";

export const HomeUI = () => {
    return (
        <div>
            <h1>Home</h1>
            <div className="Menu" style={{
                display: "flex",
                justifyContent: "start",
                flexWrap: "wrap",
                width: 304
            }}>
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