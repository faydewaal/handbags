import React from "react";

function Tile({tileTitle, tileText1, tileText2, image, TileName}) {
    return (
        <section>
            <h2>{tileTitle}</h2>
            <p>{tileText1}</p>
            <p>{tileText2}</p>
            <img src={image} alt={TileName}/>
        </section>
    )
}

export default Tile;