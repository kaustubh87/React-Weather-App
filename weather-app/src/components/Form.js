import React from "react";

/** Class Based */

/*
class Form extends React.Component{

    render(){
        
    }
};

*/

/** Functional Components */

const Form = (props) => {
    return(
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City . . ." /><br />
            <input type="text" name="country" placeholder="Country . . ." /><br />
            <button>Get Weather</button>
        </form>
     )
}

export default Form;