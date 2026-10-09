import { useState } from "react";
import "./Card1.css"

    const colors = [
  "#FF0000", // Vermelho
  "#00FF00", // Verde
  "#0000FF", // Azul
  "#FFFF00", // Amarelo
  "#FF00FF", // Magenta
  "#00FFFF", // Ciano
  "#FFA500", // Laranja
  "#800080", // Roxo
  "#FFC0CB", // Rosa
  "#008000", // Verde escuro
  "#000080", // Azul marinho
  "#A52A2A", // Marrom
  "#808080", // Cinza
  "#000000", // Preto
  "#FFFFFF", // Branco
  "#FFD700", // Dourado
  "#4B0082", // Índigo
  "#40E0D0", // Turquesa
  "#DC143C", // Carmesim
  "#7FFF00"  // Verde-limão
];
    const palet = [];
    for (let i = 0; i < 6; i++) {
        // Gera um índice inteiro aleatório a cada volta
        const randomIndex = Math.floor(Math.random() * colors.length);
        palet.push(colors[randomIndex]);
    }

function Card1() {


    const [virado, setVirado] = useState(false);


    return (
        
        <div
            className={`card1 ${virado ? "virado" : ""}`}
            onClick={() => setVirado(!virado)}
        >
            <div className="front"></div>
            <div className="verse-content">
                <div style={{backgroundColor: `${palet[0]}`}} className="paletColor"></div>
                <div style={{backgroundColor: `${palet[1]}`}} className="paletColor"></div>
                <div style={{backgroundColor: `${palet[2]}`}} className="paletColor"></div>
                <div style={{backgroundColor: `${palet[3]}`}} className="paletColor"></div>
                <div style={{backgroundColor: `${palet[4]}`}} className="paletColor"></div>
                <div style={{backgroundColor: `${palet[5]}`}} className="paletColor"></div>
            </div>
        </div>
    )
}


export const paletCard1 = palet
    
export default Card1;
