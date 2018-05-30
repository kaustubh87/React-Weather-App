import React from "react";

/** Class based components */

/*class Titles extends React.Component{
    render() {
        
    }
}
*/

const Titles = (props) => {
    return (
        <div>
            <h1 className="title-container__title">Weather Finder</h1>
            <p className="title-container__subtitle">Find out temperature, conditions and more . . .</p>
        </div>
    );
}

export default Titles;