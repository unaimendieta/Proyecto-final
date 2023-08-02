import { useEffect, useState } from "react";
import PlanCard from "../../components/planCard/PlanCard";
import ProductCard from "../../components/productCard/ProductCard";
import { BlogBgImg, BlogSection, Gradient, Categories, CategoryContainer, CategoryTitle, CreateButton, Email, EmailFormContainer, FrequencyOption, Highlight, HookCaption, HookContainer, HookTitle, MainContainer, PaymentFrequency, PlanSection, Plans, ProductSection, Products, SectionHeader, SectionTitle, SectionTitleContainer, SeeMoreButton, TitleUnderline, RightSection, LeftSection, ArticleResume, ArticleTitle, ArticleText, BlogButton } from "./styles";

const Home = () => {
        const [productLists, setProductLists] = useState({
                popular: [],
                recent: []
        })

        useEffect(() => {
                loadProducts(setProductLists);
        }, [])
        return (
                <>
                        <MainContainer>
                                <HookContainer>
                                        <HookTitle>Encuentra el <Highlight>mejor precio</Highlight> para tus componentes<br /> de bicicleta en un solo lugar con Pedal Price.</HookTitle>
                                        <HookCaption>Crea tu cuenta y comienza a disfrutar de todas la ventajas que te<br /> proporciona ser miembro de esta gran familia</HookCaption>
                                        <EmailFormContainer>
                                                <Email type="email" placeholder="Introduce tu correo electrónico" />
                                                <CreateButton>CREAR</CreateButton>
                                        </EmailFormContainer>
                                </HookContainer>
                                <Categories>
                                        <CategoryContainer imageSrc="../../../assets/home/ofertas.png">
                                                <CategoryTitle>Productos en oferta</CategoryTitle>
                                        </CategoryContainer>
                                        <CategoryContainer imageSrc="../../../assets/home/componentes.png">
                                                <CategoryTitle>Componentes y repuestos</CategoryTitle>
                                        </CategoryContainer>
                                        <CategoryContainer imageSrc="../../../assets/home/accesorios.png">
                                                <CategoryTitle>Accesorios</CategoryTitle>
                                        </CategoryContainer>
                                </Categories>
                                <ProductSection>
                                        <SectionHeader>
                                                <SectionTitleContainer>
                                                        <SectionTitle>Productos nuevos</SectionTitle>
                                                        <TitleUnderline></TitleUnderline>
                                                </SectionTitleContainer>
                                                <SeeMoreButton to={`/catalog/${"orderBy=recent "}`}>Ver Mas</SeeMoreButton>
                                        </SectionHeader>
                                        <Products>
                                                {productLists.recent.map(product =>
                                                        <ProductCard key={product._id} productId={product._id} priceChanged="" priceChange="" img={product.img[0]} title={product.name} price={product.price[0].Price} beforePrice="" vendor={product.price[0].Vendor} />

                                                )}
                                        </Products>
                                </ProductSection>
                                <ProductSection>
                                        <SectionHeader>
                                                <SectionTitleContainer>
                                                        <SectionTitle>Productos populares</SectionTitle>
                                                        <TitleUnderline></TitleUnderline>
                                                </SectionTitleContainer>
                                                <SeeMoreButton to={`/catalog/${"orderBy=popular "}`}>Ver Mas</SeeMoreButton>
                                        </SectionHeader>
                                        <Products>
                                                {productLists.popular.map(product =>
                                                        <ProductCard key={product._id} productId={product._id} priceChanged="" priceChange="" img={product.img[0]} title={product.name} price={product.price[0].Price} beforePrice="" vendor={product.price[0].Vendor} />

                                                )}
                                        </Products>
                                </ProductSection>
                                <PlanSection>
                                        <HookTitle>¿Aun no disfrutas de las <Highlight>ventajas</Highlight> que te da la <Highlight>versión premium</Highlight> de Pedal Price?</HookTitle>
                                        <PaymentFrequency>
                                                <FrequencyOption><p>MENSUAL</p></FrequencyOption>
                                                <FrequencyOption className="selected"><p>ANUAL</p></FrequencyOption>
                                        </PaymentFrequency>
                                        <Plans>
                                                <PlanCard name="PLAN BÁSICO" price="*GRATIS*" desc={[{ icon: true, text: "Notificar cambio de precio en productos deseados" }, { icon: true, text: "Guardar 3 productos en la lista de deseados" }, { icon: false, text: "Ver el histórico del precio de los productos" }]} color="#9B45D0" waves="../../../assets/plan/free_wave.svg" />
                                                <PlanCard name="PLAN ESTANDAR" price="3,95€ al mes" desc={[{ icon: true, text: "Notificar cambio de precio en productos deseados" }, { icon: true, text: "Guardar 10 productos en la lista de deseados" }, { icon: true, text: "Ver el histórico del precio de los productos" }]} color="#D04545" waves="../../../assets/plan/estandar_wave.svg" />
                                                <PlanCard name="PLAN DELUXE" price="8,99€ al mes" desc={[{ icon: true, text: "Notificar cambio de precio en productos deseados" }, { icon: true, text: "Guardar productos sin limite en la lista de deseados" }, { icon: true, text: "Ver el histórico del precio de los productos" }]} color="#D09045" waves="../../../assets/plan/deluxe_wave.svg" />
                                        </Plans>
                                </PlanSection>
                                <BlogSection>
                                        <Gradient></Gradient>
                                        <BlogBgImg>
                                                <RightSection>
                                                        <HookTitle>¿Quieres descubrir los <Highlight>secretos</Highlight>  del sector del ciclismo?</HookTitle>
                                                        <BlogButton>VISITA NUESTRO BLOG</BlogButton>
                                                </RightSection>
                                                <LeftSection>
                                                        <ArticleResume>
                                                                <ArticleTitle>Así debes montar componentes de carbono</ArticleTitle>
                                                                <ArticleText>La fibra de carbono es un material tan ligero y elegante como caro y delicado. Una mala decisión en el momento de la instalación de un componente nuevo puede dañarlo ...</ArticleText>
                                                        </ArticleResume>
                                                        <ArticleResume>
                                                                <ArticleTitle>Fox Union. Así son sus primeras zapatillas MTB</ArticleTitle>
                                                                <ArticleText>La marca californiana se lanza al mercado de las zapatillas para MTB con las nuevas FOX Union. Las Union están disponibles en tres modelos, dos diseñados ...</ArticleText>
                                                        </ArticleResume>
                                                </LeftSection>
                                        </BlogBgImg>
                                </BlogSection>
                        </MainContainer>
                </>
        );
};
const loadProducts = async (setProductLists) => {
        let response = await fetch("http://localhost:3000/api/products/getRecent");
        let data = await response.json();
        const recent = data.data.slice(0, 4);
        response = await fetch("http://localhost:3000/api/products/getPopular");
        data = await response.json();
        const popular = data.data.slice(0, 4);
        setProductLists({ recent, popular });
}
export default Home;