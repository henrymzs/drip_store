import Section from "../Section/Section";
import './SquareCollection.css';

export default function SquareCollection() {
    return (
        <Section title="Coleções em Destaque" classe="collection">
            <div className="imagensCollection">
                <div className="Col1">
                    <div className="colPromo">
                        <p>30% OFF</p>
                    </div>
                    <div className="h3Limit">
                        <h3>Novo Drop Supreme</h3>
                    </div>
                    <a href="#productMain">
                        <button>Comprar</button>
                    </a>
                </div>
                <div className="Col2">
                    <div className="colPromo">
                        <p>30% OFF</p>
                    </div>
                    <div className="h3Limit">
                        <h3>Nova Coleção Adidas</h3>
                    </div>
                    <a href="#productMain">
                        <button>Comprar</button>
                    </a>
                </div>
                <div className="Col3">
                    <div className="colPromo">
                        <p>30% OFF</p>
                    </div>
                    <div className="h3Limit">
                        <h3>Nova Coleção de Fone</h3>
                    </div>
                    <a href="#productMain">
                        <button>Comprar</button>
                    </a>
                </div>
            </div>
        </Section>
    )
}