import logo from "./images/OqueDesenhoLogo.png";
import "./InitialPage.css"
import Card1 from "../cards/card1/Card1";
import Card2 from "../cards/card2/Card2";
import Card3 from "../cards/card3/Card3";
import bgVideo from "./bgvideo.mp4"
import { useNavigate } from 'react-router-dom';
import { paletCard1 } from "../cards/card1/Card1";
import { stileCard2 } from "../cards/card2/Card2";
import { materialCard3 } from "../cards/card3/Card3";

function InitialPage(){

const colorPalet = paletCard1;
const stileOfArt = stileCard2;
const artMaterial = materialCard3;
const navigate = useNavigate();

console.log(paletCard1)

    function handleClick(){
        const itens = [];
        itens.push(colorPalet);
        itens.push(stileOfArt);
        itens.push(artMaterial);
        
        navigate('/MainPage', {state: {item: itens}});
    }

    return (
        <main className="initial-screen">
            <section className="hero-board">
                <section className="hero">
                <img className="logo" src={logo} alt="Logotipo do desafio" />
                <h1 className="title">
                Desenhar o quê?
                </h1>

                <p className="info">
                    Não sabe o que desenhar? pode deixar que escolhemos pra você. Clique nas cartas <span className="abaixo"> abaixo </span> <span className="ao-lado" >ao lado</span> e no botão "Gerar Desafio" para descobrir.
                </p>
            </section>
            <section className="controls">
                <div className="cards">
                    <Card1/>
                    <Card2/>
                    <Card3/>
                </div>
            </section>
            </section>
            <div className="button-area">
                    <video
                        className="video-bg"
                        src={bgVideo}
                        muted 
                        autoPlay 
                        loop
                    />
                    <button onClick={handleClick}>Gerar Desafio</button>
                    <a href="https://github.com/abrahaobraga10/Desenhar-o-que-" >Mais informações</a>
                </div>
        </main>
    );
}

export default InitialPage;