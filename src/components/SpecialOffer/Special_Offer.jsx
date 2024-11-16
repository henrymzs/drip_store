import Sapato1 from "../../assets/section/tenis.svg"
import "./Special_offer.css"


export default function OfertaEspecial() {
    return (
        <section id="ofertaEspecial">
            <div className="imagem">
                <img id="sapato" src={Sapato1} alt="Sapato1" />


            </div>
            <div className="textos">
                <h4>Oferta Especial</h4>
                <h1>Air Jordan edição de colecionador</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi, veniam similique consequatur non fugit atque dignissimos a quisquam veritatis ducimus amet quaerat laborum, voluptate quis molestias laboriosam voluptas commodi!</p>
                <a href="#productMain"><button>Ver Oferta</button></a>
            </div>
        </section>
    )
}