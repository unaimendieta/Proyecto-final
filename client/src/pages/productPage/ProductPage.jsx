import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { BackButton, BreadCrum, Characteristic, CharacteristicTable, Characteristics, Coment, ComentHeader, Coments, Desc, GoVendorButton, GraphSection, Header, Image, ImageSection, InfoHeader, InformationSection, LeftSection, Level, Liked, MainContainer, OtherImages, Price, PriceSection, ProductDetails, Products, RelatedProducts, Row, SectionTitle, SeeMore, Separator, SmallImage, Stars, Title, UserValoration, Valoration, ValorationContainer, ValorationSection, ValorationStars } from "./styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProductPage = () => {
    const { id } = useParams();
	// const {user } = useContext(AuthContext);
    const [productData, setProductData] = useState({
        _id: "",
        name: "",
        img: [],
        category: "",
        price: [
            { "Vendor": "", "Price": 0, "Url": "" }
        ],
        priceHystory: [{ "vendor": "", "prices": [{ "date": "", "value": 0 }] }],
        valoration: "",
        coments: [
            { "name": "", "valoration": 0, "text": "" }],
        desc: "",
        characteristics: [
            { "name": "", "detail": "" }
        ],
        views: 0,
        creation: ""
    });
    const [relatedProductLists, setRelatedProductLists] = useState([{
        _id: "",
        name: "",
        img: [],
        category: "",
        price: [
            { "Vendor": "", "Price": 0, "Url": "" }
        ],
        priceHystory: [{ "vendor": "", "prices": [{ "date": "", "value": 0 }] }],
        valoration: "",
        coments: [
            { "name": "", "valoration": 0, "text": "" }],
        desc: "",
        characteristics: [
            { "name": "", "detail": "" }
        ],
        views: 0,
        creation: ""
    }])

    useEffect(() => {
        window.scrollTo(0, 0);
        loadProduct(id, setProductData);
        getRelatedProducts(id, setRelatedProductLists);
    }, [id]);
    return (
        <>
            <MainContainer>
                <Header>
                    <BreadCrum>
                        <Level>Home</Level>
                        <Separator>/</Separator>
                        <Level>Todos los productos</Level>
                        <Separator>/</Separator>
                        <Level>Componentes</Level>
                        <Separator>/</Separator>
                        <Level>{productData.category}</Level>
                    </BreadCrum>
                    <BackButton>VOLVER</BackButton>
                </Header>
                <ProductDetails>
                    <ImageSection>
                        <OtherImages>
                            {productData.img.map(img =>
                                <SmallImage key={img} src={img} />
                            )}
                        </OtherImages>
                        <Image src={productData.img[0]} />
                    </ImageSection>
                    <InformationSection>
                        <InfoHeader>
                            <Title>{productData.name}</Title>
                            <Liked>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="#D04545" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.22318 16.2905L9.22174 16.2892C6.62708 13.9364 4.55406 12.0515 3.11801 10.2946C1.69296 8.55118 1 7.05624 1 5.5C1 2.96348 2.97109 1 5.5 1C6.9377 1 8.33413 1.67446 9.24117 2.73128L10 3.61543L10.7588 2.73128C11.6659 1.67446 13.0623 1 14.5 1C17.0289 1 19 2.96348 19 5.5C19 7.05624 18.307 8.55118 16.882 10.2946C15.4459 12.0515 13.3729 13.9364 10.7783 16.2892L10.7768 16.2905L10 16.9977L9.22318 16.2905Z" stroke="#D04545" strokeWidth="2" />
                                </svg>
                            </Liked>
                        </InfoHeader>
                        <Valoration>
                            <Stars></Stars>
                            <p>{productData.valoration} de 1.492 valoraciones</p>
                        </Valoration>
                        <Desc>{productData.desc}</Desc>
                        <Characteristics>
                            <h3>Características del producto</h3>
                            <CharacteristicTable>
                                <tbody>
                                    {productData.characteristics.map((value, index) =>
                                        <Row key={index}>
                                            <Characteristic>{value.name}</Characteristic>
                                            <Characteristic>{value.detail}</Characteristic>
                                        </Row>
                                    )}
                                </tbody>
                            </CharacteristicTable>
                        </Characteristics>
                        <PriceSection>
                            <Price ><span>Mejor Precio: </span>{productData.price[0].Price}€</Price>
                            <GoVendorButton href={productData.price[0].Url} target="_blank">Ir a {productData.price[0].Vendor}</GoVendorButton>
                            <SeeMore>VER TODOS LOS PRECIOS</SeeMore>
                        </PriceSection>
                    </InformationSection>
                </ProductDetails>
                <GraphSection></GraphSection>
                <ValorationSection>
                    <SectionTitle>Comentarios y valoraciones</SectionTitle>
                    <ValorationContainer>
                        <LeftSection>
                            <h3>Valoraciones</h3>
                            <ValorationStars></ValorationStars>
                            <p>{productData.valoration} de 1.492 valoraciones</p>
                        </LeftSection>
                        <Coments>
                            {productData.coments.map((coment, index) =>
                                <Coment key={index}>
                                    <ComentHeader>
                                        <h3>{coment.name}</h3>
                                        <UserValoration>{coment.valoration} / 5</UserValoration>
                                    </ComentHeader>
                                    <p>{coment.text}</p>
                                </Coment>
                            )}
                        </Coments>
                    </ValorationContainer>
                </ValorationSection>
                <RelatedProducts>
                    <SectionTitle>Productos Relacionados</SectionTitle>
                    <Products>
                        {relatedProductLists.map(product =>
                            <ProductCard key={product._id} productId={product._id} priceChanged="" priceChange="" img={product.img[0]} title={product.name} price={product.price[0].Price} beforePrice="" vendor={product.price[0].Vendor} />

                        )}
                    </Products>
                </RelatedProducts>

            </MainContainer>
        </>
    );
};
const loadProduct = async (id, setProduct) => {
    const response = await fetch("http://localhost:3000/api/products/getById/" + id);
    const data = await response.json();
    setProduct(data.data);
}
const getRelatedProducts = async (id, setRelatedProductLists) => {
    const response = await fetch("http://localhost:3000/api/products/getRelatedProducts/" + id);
    const data = await response.json();
    setRelatedProductLists(data.data);
}
export default ProductPage;