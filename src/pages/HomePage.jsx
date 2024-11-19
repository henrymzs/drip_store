import SquareCollection from "../components/SquareCollection/SquareCollection";
import CircleCollection from "../components/CircleCollection/CircleCollection";
import Layout from "./Layout";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import ProductCard from "../components/ProductCard/ProductCard";
import SpecialOffer from "../components/SpecialOffer/Special_Offer"

export default function HomePage() {
    return (
        <>
            <Layout posicao={0}>
            <SquareCollection />
            <CircleCollection />
            <Section><ProductListing title="Produtos em alta" children={<ProductCard quantidade={8} />} /></Section>
            <SpecialOffer />
            </Layout>
        </>
    )
}