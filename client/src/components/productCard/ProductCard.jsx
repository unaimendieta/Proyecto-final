import { useContext, useEffect, useState } from "react";
import { Arrow, BeforePrice, Details, LikeButton, LowerSection, Price, PriceChange, Product, Title, UpperSection, Vendor } from "./styles";
import { AuthContext } from "../../context/AuthContext";

const ProductCard = ({ productId, priceChanged, priceChange, img, title, price, beforePrice, vendor }) => {
    const [isLiked, setIsLiked] = useState(false);
    const {user,setUser} = useContext(AuthContext);
    useEffect(() => {
        try {

            setIsLiked(!!user.liked.find(product => product === productId));
        } catch (error) {

        }
    }, [])

    return (
        <>
            <Product to={`/product/${productId}`}>
                <UpperSection imageSrc={img}>
                    <PriceChange className={priceChanged}>
                        <Arrow className={priceChanged} src="../../../assets/product/arrow.svg" />
                        <p>{priceChange}</p>
                    </PriceChange>
                    <LikeButton onClick={e => handleLike(e, isLiked, setIsLiked, productId, user,setUser)}>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill={isLiked ? "#D04545" : "none"} xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.22318 16.2905L9.22174 16.2892C6.62708 13.9364 4.55406 12.0515 3.11801 10.2946C1.69296 8.55118 1 7.05624 1 5.5C1 2.96348 2.97109 1 5.5 1C6.9377 1 8.33413 1.67446 9.24117 2.73128L10 3.61543L10.7588 2.73128C11.6659 1.67446 13.0623 1 14.5 1C17.0289 1 19 2.96348 19 5.5C19 7.05624 18.307 8.55118 16.882 10.2946C15.4459 12.0515 13.3729 13.9364 10.7783 16.2892L10.7768 16.2905L10 16.9977L9.22318 16.2905Z" stroke={isLiked ? "#D04545" : "black"} strokeWidth="2" />
                        </svg>
                    </LikeButton>
                </UpperSection>
                <LowerSection>
                    <Details>
                        <Title>{title}</Title>
                        <Price><BeforePrice>{beforePrice}</BeforePrice>{price}€</Price>
                    </Details>
                    <Vendor>{vendor}</Vendor>
                </LowerSection>

            </Product>
        </>
    );
};
const handleLike = async (e, isLiked, setIsLiked, productId, user,setUser) => {
    e.preventDefault();
    if (user.liked.find(product => product === productId)) {
        console.log("si")
        user.liked = user.liked.filter(product => product !== productId);
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
        setIsLiked(!isLiked)
    } else {
        if (user.liked.length < user.plan.likeMax) {
            user.liked.push(productId);
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
            setIsLiked(!isLiked)
        }
    }
    setUser({...user,liked:user.liked})
}
export default ProductCard;