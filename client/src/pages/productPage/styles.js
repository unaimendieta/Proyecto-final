import styled from "styled-components";
// import SPACING from "../../styles/Spacing";

const MainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px 100px;
`;
const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BreadCrum = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Level = styled.a`
    color: #000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
`;
const Separator = styled.p`
    color: #000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
`;
const BackButton = styled.button`
    
    width: 120px;
    padding: 8px 0;
    border-radius: 8px;
    background-color: #D04545;
    border: none;
    color: #ffffff;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
`;
const ProductDetails = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
`;
const ImageSection = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 16px;
`;
const OtherImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const SmallImage = styled.img`
    
`;
const Image = styled.img`
    
`;
const InformationSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
`;
const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Title = styled.h1`
    
`;
const Liked = styled.div`
    
`;
const Valoration = styled.div`
    
`;
const Stars = styled.div`
    
`;
const Desc = styled.p`
    
`;
const Characteristics = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const CharacteristicTable = styled.table`
    
`;
const Row = styled.tr`
    background-color: #ffffff;
    :nth-child(even) {
    background-color: #f5f5f5;
    }
`;
const Characteristic = styled.td`
    padding: 8px 16px;
`;
const PriceSection = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const Price = styled.p`
    color: #000;
    font-family: inherit;
    font-size: 25px;
    font-weight: 500;
    span{
        color: #D04545;
        font-family: inherit;
        font-size: 25px;
        font-weight: 700;
    }
`;
const GoVendorButton = styled.a`
    width: 100%;
    height: 64px;
    border-radius: 8px;
    background-color: #D04545;
    border: none;
    color: #ffffff;
    font-family: inherit;
    font-size: 24px;
    font-weight: 700;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
`;
const SeeMore = styled.p`
    align-self: center;
    color: #D04545;
    text-decoration: underline;
    cursor: pointer;
`;
const GraphSection = styled.section`
    margin: 32px 0;
    height: 300px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 16px;
`;
const RelatedProducts = styled.section`
margin-top: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const SectionTitle = styled.h2`
`;
const Products = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 400px;
    gap:16px;
`;
const ValorationSection = styled.section`
    width: 100%;
`;
const ValorationContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 400px;
    gap: 16px;
`;
const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
const ValorationStars = styled.div`
    display: flex;
    gap: 4px;
`;
const Coments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 400px;
    overflow-y: auto;
    padding: 32px 0;
`;
const Coment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: 0.5px solid #000000;
    padding-right: 16px;
`;
const ComentHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
const UserValoration = styled.div`
    display: flex;
    gap: 4px;
`;
export {MainContainer,BackButton,BreadCrum,Header,Level,Separator,Desc,GoVendorButton,Image,ImageSection,InfoHeader,InformationSection,Liked,OtherImages,Price,PriceSection,ProductDetails,SeeMore,SmallImage,Stars,Title,Valoration,GraphSection,Products,RelatedProducts,SectionTitle,ValorationContainer,ValorationSection,Coment,ComentHeader,Coments,LeftSection,UserValoration,ValorationStars,Characteristic,CharacteristicTable,Characteristics,Row};