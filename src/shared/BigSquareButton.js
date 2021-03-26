import React, { useState } from "react";
import { PropTypes } from "prop-types";

const BigSquareButton = (props) => {
    const [hover, setHover] = useState(false);

    let buttonStyle = hover ? hoverStyle : styles;
    console.log(buttonStyle);

    return (
        <button onClick={props.onClick} style={buttonStyle} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            {props.imgSrc !== null && (
                <img src={props.imgSrc} alt={props.imgAlt} style={imgStyle} />
            )}
            {props.text}
        </button>
    );
};

BigSquareButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
};

const styles = {
    border: "1px black solid",
    borderRadius: 0,
    padding: "0.5em 1em",
    backgroundColor: "#FDFDFD",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    fontColor: "gray",
    fontFamily: "Helvetica",
    width: 175,
    height: 270,
    fontSize: 18,
};

const hoverStyle = {...styles};
hoverStyle.backgroundColor = "#E1E1E1";

const imgStyle = {
    width: 100,
    height: 100,
    objectFit: "cover",
    marginBottom: "1em",
    opacity: "75%"
};


export default BigSquareButton;
