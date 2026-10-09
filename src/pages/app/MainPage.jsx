import { paletCard1 } from "../cards/card1/Card1";
import { stileCard2 } from "../cards/card2/Card2"
import { materialCard3 } from "../cards/card3/Card3"
import "./MainPage.css"
import { useEffect, useState } from "react"
import Modal from "./Modal";
import { useRef } from "react";
import html2canvas from "html2canvas";
import iconArt from "./image/arte.png"
import iconStile from "./image/estilo.png"
import iconMaterial from "./image/material.png"
import iconPalet from "./image/paleta-de-cores.png"
import iconCanva from "./image/tela-de-pintura.png"




const sujeitos = [
    "um(a) aventureiro(a)",
    "um(a) mago(a)",
    "um(a) cavaleiro(a)",
    "um(a) pirata",
    "um(a) criatura",
    "um(a) robô",
    "um(a) viajante do tempo",
    "um(a) explorador(a)",
    "um(a) alquimista",
    "um(a) príncipe(a)",
    "um(a) príncipe(a)",
    "um(a) guerreiro(a)",
    "um(a) inventor(a)",
    "um(a) detetive",
    "um(a) arqueiro(a)",
    "um(a) samurai",
    "um(a) ninja",
    "um(a) músico(a)",
    "um(a) cientista",
    "um(a) astronauta",
    "um(a) guardião(ã)",
    "um(a) monstro",
    "um(a) espírito",
    "um(a) alienígena",
    "um(a) animal",
    "um(a) mago(a)",
    "um(a) mercador(a)",
    "um(a) caçador(a) de tesouros",
    "um(a) dragão",
    "um(a) inseto",
    "um(a) criatura marinha",
    "um(a) gigante",
    "um(a) androide",
    "um(a) viajante",
    "um(a) rei(rainha)",
    "um(a) pirata espacial",
    "um(a) piloto",
    "um(a) cientista",
    "um(a) entidade ancestral da floresta",
    "um(a) ser mitológico(a)",
    "um(a) guerreiro(a)",
    "um(a) mercenário(a)",
    "um(a) detetive",
    "um(a) personagem",
    "uma espada",
    "uma arma",
    "um veículo",
    "um navio",
    "um livro",
    "um(a) objeto aleatório na sua frente",
    "algo inspirado em uma comida",
    "um objeto referente a uma cultura real",
    "um personagem referente a uma cultura real",
    "um dispositivo",
    "uma construção",
    "uma paisagem",
    "uma planta"
];


const temas = [
    "mágico(a)",
    "sombrio(a)",
    "fofo",
    "steampunk",
    "futurista",
    "medieval",
    "cyberpunk",
    "misterioso(a)",
    "aventureiro(a)",
    "fantástico(a)",
    "espacial",
    "subaquático(a)",
    "pós-apocalíptico(a)",
    "onírico(a)",
    "surrealista",
    "tecnológico(a)",
    "vintage",
    "elegante",
    "selvagem",
    "cômico(a)",
    "melancólico(a)",
    "heroico(a)",
    "vilanesco(a)",
    "espiritual",
    "extraterrestre",
    "mitológico(a)",
    "(tropical",
    "gótico(a)",
    "futurista retrô",
    "de conto de fadas"
];

const objetos = [
    "um relógio",
    "uma chave",
    "um guarda-chuva",
    "uma lâmpada",
    "um livro",
    "uma xícara",
    "uma bússola",
    "uma câmera",
    "um rádio",
    "uma mala",
    "um brinquedo",
    "uma máscara",
    "uma espada",
    "um instrumento musical",
    "uma garrafa",
    "um espelho",
    "um telefone",
    "uma máquina de escrever",
    "um óculos",
    "um chapéu",
    "uma vela",
    "uma lanterna",
    "um relógio de bolso",
    "uma caixa",
    "um cadeado",
    "um pincel",
    "uma televisão antiga",
    "um controle remoto",
    "uma mochila",
    "um objeto misterioso"
];

const natureza = [
    "fogo",
    "água",
    "terra",
    "ar",
    "raios",
    "gelo",
    "florestas",
    "flores",
    "raízes",
    "fungos",
    "cristais",
    "vulcões",
    "oceano",
    "montanhas",
    "deserto",
    "chuva",
    "neve",
    "tempestades",
    "lua",
    "sol",
    "estrelas",
    "aurora",
    "maré",
    "vento",
    "folhas",
    "insetos",
    "cogumelos",
    "corais",
    "nuvens",
    "um fenômeno natural"
];

const drawIndex = Math.floor(Math.random() * sujeitos.length);
const draw = sujeitos[drawIndex]

const objectIndex = Math.floor(Math.random() * objetos.length);
const object = objetos[objectIndex]

const themeIndex = Math.floor(Math.random() * temas.length);
const theme = temas[themeIndex]

const natureIndex = Math.floor(Math.random() * natureza.length);
const nature = natureza[natureIndex]



async function findWiki(title) {
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Erro ${response.status}: artigo não encontrado`);
    }

    const infoWiki = await response.json();

    return {
        titleWiki: infoWiki.title,
        textInfoWiki: infoWiki.extract,
        imageWiki: infoWiki.thumbnail?.source,
        link: infoWiki.content_urls.desktop.page,
    };
}

function MainPage () {

    function selectFile(event) {
        const file = event.target.files[0];
        console.log(file);

        if (file) {
            setUpload(URL.createObjectURL(file));
        }
    }

    function generateAgain() {
        window.history.back();
        setTimeout(() => {
            window.location.reload();
        },100);
    }

    const [upload, setUpload] = useState(null);
    const [wiki, setWiki] = useState(null);
    const [wiki2, setWiki2] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const cardRef = useRef(null);

    const saveAsImage = async () => {
        const canvas = await html2canvas(cardRef.current, {
            useCORS: true,
            scale: 2,
            scrollY: -window.scrollY
        });

        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;

        link.download = "meu-desafio.png";

        link.click()
    }

    

    useEffect(() => {

    findWiki(stileCard2)
        .then((dados) => {
            setWiki2(dados)
        })
        .catch((erro) => {
            console.log(erro)
        })

}, [])

    useEffect(() => {

        if (materialCard3 === "Material de sua escolha") {
            return;
        }

        findWiki(materialCard3)
            .then((dados) => {
                setWiki(dados);
            })
            .catch((erro) => {
                console.log(erro);
            });

    }, []);
    
    return (
        <section className="main-screen">
            
            <div className="hero-area">
                <div className="hero-main">
                <img src={iconArt} alt="logo" className="icon" />
                <h1>Hora de desenhar!</h1>
                <p id="title-info" className="info">
                    O gerador na seção "Seu Desenho" vai sempre sugerir uma 
                    frase aleatória, você pode sempre usar a imaginação para interpretar o pedido exemplo:
                    o objeto "Lanterna" pode ser tanto uma lanterna moderna, elétrica, quanto
                    uma lanterna medieval. Os elementos podem estar inseridos no desenho da forma
                    que você achar melhor.
                </p>
            </div>
            <h2 className="desafio-title">- DESAFIO -</h2>
            <div id="seu-desenho" className="chalenge-info">
                    <img  className="icon" src={iconCanva} alt="representação de um quadro" />
                    <h3>seu desenho:</h3>
                    <p className="info">
                        Desenhe {draw} {theme} inspirando-se ou incluindo {object} de alguma forma, ligado ao conceito de {nature}.
                    </p>
                </div>
            </div>


            <div className="chalenge">
                
                <div className="chalenge-info">
                    <img src={iconPalet} alt="representação de uma paleta de cores" className="icon" />
                    <h3>paleta de cores</h3>
                    <div id="palet">
                        <div style= {{backgroundColor: `${paletCard1[0]}`}} className="colors"></div>
                        <div style= {{backgroundColor: `${paletCard1[1]}`}} className="colors"></div>
                        <div style= {{backgroundColor: `${paletCard1[2]}`}} className="colors"></div>
                        <div style= {{backgroundColor: `${paletCard1[3]}`}} className="colors"></div>
                        <div style= {{backgroundColor: `${paletCard1[4]}`}} className="colors"></div>
                        <div style= {{backgroundColor: `${paletCard1[5]}`}} className="colors"></div>
                    </div>
                    <p className="info">
                    Esta é a paleta de cores que seu desenho deve seguir
                    </p>

                </div>
                <div className="chalenge-info">
                    <img className="icon" src={iconMaterial} alt="" />
                    {materialCard3 === "Material de sua escolha" ? (
    <>
        <h3>Material</h3>
        <h4 className="sub-title">Material de sua escolha</h4>
        <p className="info">
            Escolha qualquer material que você tenha disponível
            para realizar o desenho.
        </p>
    </>
) : (
    <>
        <h3>Material</h3>
        <h4 className="sub-title">
            {materialCard3}
        </h4>

        <img
            src={wiki?.imageWiki}
            alt={`Imagem do material: ${materialCard3}`}
            className="exemple"
        />

        <p className="info">
            {wiki?.textInfoWiki}
        </p>
    </>
)}
                </div>
                <div className="chalenge-info">
                    <img src={iconStile} alt="" className="icon" />
                    <h3>estilo</h3>
                    <h4 className="sub-title">{wiki2?.titleWiki}</h4>
                    <img src={wiki2?.imageWiki} alt="" className="exemple" />
                    <p className="info">
                    {wiki2?.textInfoWiki}
                    </p>
                </div>

                <button className="end-buttons" onClick={() => setOpenModal(true)}>Gerar Resumo para compartilhar</button>
            <button id="last-button" className="end-buttons" onClick={generateAgain}>Gerar Desafio Novamente</button>

            </div>

            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <div ref={cardRef} className="resume">
                    <div className="resume-infos">
                        <div className="photo-area">
                            <div className="resume-logo"></div>
                             <h3 className="resume-title">Desenhar o que?</h3>
                             <p className="resume-text" >Desenhar o quê? é um site que escolhe algo aleatório pra você desenhar esse foi meu desenho:</p>
                            <div 
                                className="photo"
                                style={upload ? {
                                    backgroundImage: `url(${upload})`
                                } : {}}
                            ></div>
                        </div>
                        <div className="themes-info">
                            <h3 className="theme-title">Estilo:</h3>
                            <div className="theme-info">
                                <img src={wiki2?.imageWiki} alt="" className="theme-resume-image" />
                    <h4 className="resume-subtitle">{wiki2?.titleWiki}</h4>
                            </div>
                             <h3 className="theme-title">Material:</h3>
                            <div className="theme-info">
                                {materialCard3 === "Material de sua escolha" ? (
                                    <>
                                        <h4 className="resume-subtitle">Material de sua escolha</h4>
                                    </>
                                ) : (
                                    <>

                                        <img
                                            src={wiki?.imageWiki}
                                            alt={`Imagem do material: ${materialCard3}`}
                                            className="theme-resume-image"
                                        />

                                        <h4 className="resume-subtitle">
                                            {materialCard3}
                                        </h4>
                                        
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="resume-footer">
                        <div className="resume-footer-text-area">
                        <h3 className="resume-subtitle">Meu resultado:</h3>
                        <h5>Minha paleta de cores:</h5>
                        <div id="palet-resume">
                            <div style= {{backgroundColor: `${paletCard1[0]}`}} className="colors-resume"></div>
                            <div style= {{backgroundColor: `${paletCard1[1]}`}} className="colors-resume"></div>
                            <div style= {{backgroundColor: `${paletCard1[2]}`}} className="colors-resume"></div>
                            <div style= {{backgroundColor: `${paletCard1[3]}`}} className="colors-resume"></div>
                            <div style= {{backgroundColor: `${paletCard1[4]}`}} className="colors-resume"></div>
                            <div style= {{backgroundColor: `${paletCard1[5]}`}} className="colors-resume"></div>
                        </div>
                        <h5>Meu enunciado:</h5>
                        <p>
                            Desenhe {draw} {theme} inspirando-se ou incluindo {object} de alguma forma, ligado ao conceito de {nature}.
                        </p>
                        <h6>Desenvolvido por: Abrahão Braga | Instagram: @abrahao_isaac | GitHub: abrahaobraga10 </h6>
                        </div>
                    </div>
                </div>
                <div className="resume-controls">
                        <h5>Adicione a imagem do seu desenho:</h5>
                    <label className="upload-button">
                        Escolher imagem
                        <input onChange={selectFile} type="file" accept="image/*" />
                    </label>
                    <h5>Salve seu resumo com o desenho:</h5>
                    <button onClick={saveAsImage}>Salvar resumo</button>
                </div>
            </Modal>

        </section>
    )
}

export default MainPage