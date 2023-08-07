import { useContext, useEffect, useState } from "react";
import { AddedQnty, Arrow, ChangeAmount, Container, Content, Details, Hook, HookButton, HookContainer, Image, Liked, MainContainer, Name, Number, OpenButton, Price, PriceChange, Product, ProductContainer, Products, Title, TitleContainer, UpperSection, VendorButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LikePopUp = () => {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([{
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
    }]);
    const [isOpen, setIsOpen] = useState(false);
    const {user,setUser} = useContext(AuthContext);

    useEffect(() => {
        loadProducts(user.liked, setProductList);
    }, []);
    return (
        <>
            <MainContainer>
                <Container className={isOpen && "open"}>
                    <TitleContainer>
                        <Title>LISTA DE DESEADOS</Title>
                    </TitleContainer>
                    <Content>
                        <ProductContainer>
                            <Products>
                                {productList.map(product =>
                                    <Product key={product._id}>
                                        <Image src={product.img[0]} onClick={() => navigate(`/product/${product._id}`)} />
                                        <Details>
                                            <UpperSection onClick={() => navigate(`/product/${product._id}`)}>
                                                <Name>{product.name}</Name>
                                                {/* <PriceChange className="lower">
                                                    <Arrow className="lower" src="../../../assets/product/arrow.svg"/>
                                                    <p>7%</p>
                                                </PriceChange> */}
                                            </UpperSection>
                                            <Price>{product.price[0].Price}€</Price>
                                            <VendorButton href={product.price[0].Url} target="_blank">{product.price[0].Vendor}</VendorButton>
                                        </Details>
                                        <Liked onClick={() => handleLiked(product._id, setProductList, user,setUser)}>
                                            <svg width="18" height="18" viewBox="0 0 20 19" fill="#D04545" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.27L1.28 0L19 17.72L17.73 19L14.18 15.44L12.45 17.03L11 18.35L9.55 17.03C4.4 12.36 1 9.27 1 5.5C1 4.55 1.23 3.67 1.63 2.9L0 1.27ZM6.5 0C8.24 0 9.91 0.81 11 2.08C12.09 0.81 13.76 0 15.5 0C18.58 0 21 2.41 21 5.5C21 8.07 19.42 10.32 16.79 12.97L4.27 0.45C4.95 0.16 5.7 0 6.5 0Z" fill="#D04545" />
                                            </svg>
                                        </Liked>
                                    </Product>
                                )}
                            </Products>
                            <AddedQnty>Productos añadidos {productList.length} de {user.plan.likeMax}</AddedQnty>
                        </ProductContainer>
                        <HookContainer>
                            <Hook>¿Quieres guardar mas productos en la lista de deseado?</Hook>
                            <HookButton>¡HAZTE PREMIUM!</HookButton>
                        </HookContainer>
                    </Content>
                </Container>
                <OpenButton onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ?
                        <svg width="32" height="32" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.22318 16.2905L9.22174 16.2892C6.62708 13.9364 4.55406 12.0515 3.11801 10.2946C1.69296 8.55118 1 7.05624 1 5.5C1 2.96348 2.97109 1 5.5 1C6.9377 1 8.33413 1.67446 9.24117 2.73128L10 3.61543L10.7588 2.73128C11.6659 1.67446 13.0623 1 14.5 1C17.0289 1 19 2.96348 19 5.5C19 7.05624 18.307 8.55118 16.882 10.2946C15.4459 12.0515 13.3729 13.9364 10.7783 16.2892L10.7768 16.2905L10 16.9977L9.22318 16.2905Z" stroke="black" strokeWidth="2" />
                        </svg>
                        :
                        <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L12 12M2 12L12 2" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }

                    {/* <ChangeAmount className="hasValue">
                        <Number>1</Number>
                    </ChangeAmount> */}
                </OpenButton>
            </MainContainer>
        </>
    );
};


const loadProducts = async (likes, setProductList) => {
    const list = [];

    for (let index = 0; index < likes.length; index++) {
        const response = await fetch("http://localhost:3000/api/products/getById/" + likes[index]);
        const data = await response.json();
        list.push(data.data)
    }

    setProductList(list);
}
const handleLiked = async (id, setProductList, user,setUser) => {
    user.liked = user.liked.filter(product => product !== id);
    fetch("http://localhost:3000/api/users/update", {
        method: 'PATCH',
        body: JSON.stringify({
            "id": user.uid,
            "name": user.name,
            "surname": user.surname,
            "liked": user.liked,
            "plan": user.plan
        }),
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json"
        }
    });
    setProductList(user.liked);
    setUser({...user,liked:user.liked})
}

export default LikePopUp;