import React from "react";
import Card from "../../commons/Card/Card";
import "./grid.css"

const Grid = ({ types }) => {

    return (
        <ul className="template_grid">
            {types.map((type, i) => (
                <Card key={i} type={type} />
            ))}
        </ul>

    )
};

export default Grid;