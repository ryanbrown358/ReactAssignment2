import React, { Component } from 'react';

const Validation = (props) => {
    let validateMessage = "Text is to long";

    if(props.inputLength <= 5){
        validateMessage = "Text is to short";

    }

    return(
        <div>
            <p>{validateMessage}</p>
        </div>
    );
}
export default Validation;