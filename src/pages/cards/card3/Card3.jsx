import { useState } from "react";
import "./Card3.css"

const materiais = [
    "Material de sua escolha",
    "Colagem",
    "Lápis",
    "Lápis de cor",
    "Canetinha",
    "Caneta hidrográfica",
    "Giz de cera",
    "Giz pastel",
    "Guache",
    "Tinta acrílica",
    "Aquarela",
    "Material de sua escolha",
    "Lapiseira",
    "Marcador de texto",
    "Caneta esferográfica",
    "Tinta nanquim",
    "Material de sua escolha",
    "Material de sua escolha",
    "Material de sua escolha",
    "Material de sua escolha"
];

const randomIndex = Math.floor(Math.random() * materiais.length);
const material = materiais[randomIndex]


function Card3() {
const [virado3, setVirado3] = useState(false);




    return (
        <div
            className={`card3 ${virado3 ? "virado3" : ""}`}
            onClick={() => setVirado3(!virado3)}
        >
            <div className="front3"></div>
            <div className="verse-content3">
                <p>{material}</p>
            </div>
        </div>
    )
}

export const materialCard3 = material
export default Card3;