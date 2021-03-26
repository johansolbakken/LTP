import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
    return (<div style={styles}>
        {props.imgSrc !== null && <img src={props.imgSrc} alt={props.imgAlt} style={imgStyle}/>}
        {props.text}
    </div>)
}

Tab.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    text: PropTypes.string
};

const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    margin: 5,
    width: 80
};

const imgStyle = {
    width: 40,
    height: 40
}

export default Tab;