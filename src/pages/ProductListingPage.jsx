import FilterGroup from "../components/FilterGroup/FilterGroup";
import Layout from "./Layout";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import ProductCard from "../components/ProductCard/ProductCard";
import SetaDown from "../assets/icons/SetaDown.png"
import './ProductListingPage.css'
import { useNavigate } from 'react-router-dom'; 

export default function ProductListingPage() {
    const navigate = useNavigate();
    () => {navigate('/ProductListingPage'); };
    return (
        <Layout posicao={1}>
            <div className="resultados">
                <div className="resProd">
                    <p className="resultado">Resultados para "Tênis" - &nbsp;</p>
                    <p className="prod389">389 produtos</p>
                </div>
                <div className="boxRes">
                    <p className="ordenar">Ordenar por: &nbsp;</p>
                    <p className="relevantes">mais relevantes</p>
                    <img src={SetaDown} alt="Seta para baixo" />
                </div>

            </div>
            <div style={{ display: 'flex' }}>
                <FilterGroup />
                <Section><ProductListing nomeClasse="productListingPage" display='none' margin='0' children={<ProductCard quantidade={13} />} /></Section>
            </div>

        </Layout>
    )
}