import React from "react";
import Card from "../../commons/Card/Card";
import "./grid.css"

const Grid = ({ types, category }) => {

    return (
        <ul className="template_grid">
            {types.map((type, i) => (
                <Card key={i} type={type} category={category}/>
            ))}
        </ul>
    )
};

export default Grid;