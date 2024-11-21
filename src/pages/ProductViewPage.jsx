import BuyBox from "../components/BuyBox/BuyBox";
import GalleryProduct from "../components/Gallery/GalleryProduct";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductListing from "../components/ProductListing/ProductListing";
import Section from "../components/Section/Section";
import Layout from "./Layout";

import './ProductViewPage.css'

export default function ProductViewPage() {
    return (
        <>
            <Layout posicao={0}>
            <div className="ViewPageLinks">
            <p className="LinksDestaque">Home</p>
            <p className="LinksRestante"> &nbsp;/ Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
            </div>
            <div className="ViewPageSeparacao">
            <GalleryProduct />
            <BuyBox/>
            </div>
            <Section><ProductListing title="Produtos em alta" children={<ProductCard quantidade={2} />} /></Section>
            </Layout>
        </>
    )
}