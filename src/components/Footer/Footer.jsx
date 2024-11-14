import React from "react";
import InfoComponent from "./InfoComponent";
import './Footer.css';
import Facebook from '../../assets/icons/Facebook.png';
import Instagram from '../../assets/icons/Instagram.png';
import Twitter from '../../assets/icons/Twitter.png';
import LogoFooter from '../../assets/Logos/logo-footer.svg';

const informations = [
    {
        text: "Sobre Drip Store",
        link: "/about"
    },
    {
        text: "Segurança",
        link: "/security"
    },
    {
        text: "Wishlist",
        link: "/wishlist"
    },
    {
        text: "Blog", 
        link: "/blog"
    },
    {
        text: "Trabalhe conosco",
        link: "/work-with-us"
    },
    {
        text: "Meus Pedidos",
        link: "/my-orders"
    },
];

const Categorias = [
    {
        text: "Camisetas",
        link: "/camiseta"
    },
    {
        text: "Calças",
        link: "/calças"
    },
    {
        text: "Bonés",
        link: "/bonés"
    },
    {
        text: "Headphones",
        link: "/headphones"
    },
    {
        text: "Tênis",
        link: "/Tênis"
    },
]

const Contato = [
    {
        text: "Av Santos Dumont,1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
        link: "/adress"
    },
    {
        text: "(85) 3050-3411",
        link: "/phone"
    },
]

export default function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-corpo">
                    <div className="primeira-parte">
                    <img src={LogoFooter} alt="Logo da Drip Store" className="footer-logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum facilis error quis? Quo rem enim corporis</p>
                        <div className="redes-sociais">
                            <a href="/facebook"><img src={Facebook} alt="Facebook" /></a>
                            <a href="/instagram"><img src={Instagram} alt="Instagram" /></a>
                            <a href="/twitter"><img src={Twitter} alt="Twitter" /></a>
                        </div>
                    </div>


                    <div className='elementos'>
                        <div className='informacao'>
                            <InfoComponent title="Informação" informations={informations} />
                        </div>
                        <div className='categorias'>
                            <InfoComponent title="Categorias" informations={Categorias} />
                        </div>
                        <div className='contatos'>
                            <InfoComponent title="Contato" informations={Contato} />
                        </div>
                    </div>

                </div>
                <div className='hr'>
                    <hr />
                </div>
                <div className="final">
                    <p>@2024 Digital College</p>
                </div>
            </div>
        </footer>
    )
}