import React, { useState } from "react";
import { PropTypes } from "prop-types";

const Button = (props) => {
    const [hover, setHover] = useState(true);

    return (
        <button onClick={props.onClick} style={hover === true ? styles.hover : styles.normal}>
            {props.text}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
};

const styles = {
    normal: {
        border: "1px black solid",
        borderRadius: "25px",
        padding: "0.5em 1em",
        backgroundColor: "#F1F1F1",
    },
    hover: {
        backgroundColor: "#F00",
    },
};

export default Button;
