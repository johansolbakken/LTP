import React from 'react';
import PropTypes from 'prop-types';

const Banner = (props) => {
    return (
        <div style={styles}>
            {props.text}
        </div>
    );
}

Banner.propTypes = {
    text: PropTypes.string
}

const styles = {
    width: "100%",
    textAlign: "center",
    fontSize: 28,
    fontFamily: "Helvetica",
    padding: "1em 0",
    backgroundColor: "#2D9CDB",
    border: "1px solid black",
    marginBottom: "1em"
};

export default Banner;