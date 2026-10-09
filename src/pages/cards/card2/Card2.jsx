import { useState } from "react";
import "./Card2.css"


const estilosArte = [
    "Anime",
    "Cartoon",
    "Chibi",
    "Realismo",
    "Hiper-realismo",
    "Minimalismo",
    "Pixel Art",
    "Arte Abstrata",
    "Surrealismo",
    "Futurismo",
    "Cubismo",
    "Impressionismo",
    "Expressionismo",
    "Pop Art",
    "Arte Gótica",
    "Art Nouveau",
    "Steampunk",
    "Low Poly",
    "Grafito",
    "Arte urbana"
];

const randomIndex = Math.floor(Math.random() * estilosArte.length);
const stile = estilosArte[randomIndex];


function Card2() {

const [virado2, setVirado2] = useState(false);


    return (
        <div
            className={`card2 ${virado2 ? "virado2" : ""}`}
            onClick={() => setVirado2(!virado2)}
        >
            <div className="front2"></div>
            <div className="verse-content2">
                <p>{stile}</p>
            </div>
        </div>
    )
}


export const stileCard2 = stile;

export default Card2;