import React from 'react';

const Person = (props) => {
    return (
        <div style={{ color: "red", fontSize: "50px" }}>
            <h2>Hello {props.name} , How are you ?</h2>
            <p>Lets talk about React JS</p>
        </div>
    );
};

export default Person;