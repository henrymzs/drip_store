import './BuyBox.css'
import Estrela from '../../assets/images/Stars.png'
import Estrela1 from '../../assets/images/Stars1.png'
import ProductOptionsSquare from '../ProductOptions/ProductOptionsSquare'
import ProductOptionsCircle from '../ProductOptions/ProductOptionsCircle'

export default function BuyBox () {
    return (
        <div className='BuyBoxMain'>
            <h3 className='buyboxH3'>Tênis Nike Revolution <br /> 6 Next Nature Masculino</h3>
            <p className='buyboxP'>Casual | Nike | REF:38416711</p>
            <div className='buyboxEstrela'>
             <img src={Estrela} alt="Estrelas" />
             <div className='buyboxAval'>
             <div><p>4.7</p><img src={Estrela1} alt="1Estrela" /></div>
             <p>(90 Avaliações)</p>
               </div>
            </div>
            <div className="boyboxPreco">
             <p className='RS'>R$</p>
             <div>
                <h3>219</h3>
                <p>,00</p>
             </div>
             <p>219,00</p>
            </div>
            <p className='desc'>Descrição do produto</p>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <ProductOptionsSquare/>
            <ProductOptionsCircle/> 
            <button className='comprar'>COMPRAR</button>
        </div>
    )
}