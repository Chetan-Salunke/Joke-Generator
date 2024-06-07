import React from "react";
 
const Button = (props) => {
    return <button class="btn btn-dark p-3 mt-5" onClick={props.callApi}>
        Click to generate a joke.
    </button>;
}
 
// Export Button Component
export default Button;