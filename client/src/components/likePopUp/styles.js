import styled from "styled-components";

const MainContainer = styled.div`
    position: fixed;
    bottom: 32px;
    right: 32px;
    height: 580px;
    max-height: 580px;
    width: 400px;
    display: grid;
    grid-template-rows: 1fr 64px;
    gap: 16px;
    grid-template-areas: 
    "container"
    "button";
`;

const OpenButton = styled.div`
    grid-area: "button";
    justify-self: end;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    background-color: #ffffff;
    width: 64px;
    height: 64px;
    border-radius: 100%;
    box-shadow: 10px 10px 19px -15px rgba(0,0,0,0.75);
    cursor: pointer;
`;
const ChangeAmount = styled.div`
    position: absolute;
    &.hasValue{
        position: absolute;
        top: -12px;
        left: -12px;
        height: 24px;
        width: 24px;
        border-radius: 100%;
        background-color: #D04545;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`;
const Number = styled.p`
    color: #FFF;
    font-family: inherit;
    font-size: 15px;
    font-weight: 900;
`;

const Container = styled.div`
    grid-area: "container";
    background-color: #ffffff;
    border-radius: 8px;
    transform: translate(1000px);
    display: grid;
    grid-template-rows: 40px 1fr;
    box-shadow: 10px 10px 19px -15px rgba(0,0,0,0.75);
        transition: all 0.5s ease-in-out;
    &.open{
        transform: translate(0px);
        transition: all 0.5s ease-in-out;
    } 
`;

const TitleContainer = styled.div`
    background-color: #D04545;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px  8px 0 0;
`;
const Title = styled.h2`
    color: #ffffff;
    font-family: inherit;
    font-size: 20px;
    font-weight: 800;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    padding: 8px 16px 16px;
`;
const ProductContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
`;
const Products = styled.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    overflow-y: auto;
    gap: 8px;
`;
const Product = styled.div`
    display: flex;
    gap: 8px;
    cursor: pointer;
`;
const Image = styled.img`
    width: 100px;
    height: 100px;
`;
const Details = styled.div`
    padding-top: 8px;
    display: flex;
    flex-direction: column;
`;
const UpperSection = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Name = styled.p`
    color: #000000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
`;
const PriceChange = styled.div`
    display: flex;
    height: min-content;
    padding: 4px 16px 4px 8px;
    border-radius: 4px;
    color: #FFFFFF;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    gap: 8px;
    &.lower{
        background-color: #309033;
    }
    &.higher{
        background-color: #D04545;
    }
`;
const Arrow = styled.img`
    &.higher{
        transform: rotate(180deg);
    }
`;
const Price = styled.p`
    
`;
const VendorButton = styled.a`
    text-align: center;
    margin-top: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: #D04545;
    border: none;
    color: #ffffff;
    font-family: inherit;
    font-size: 12px;
    font-weight: 800;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
`;
const Liked = styled.div`
    width: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const AddedQnty = styled.p`
    align-self: center;
    
`;
const HookContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
const Hook = styled.p`
    text-align: center;
    color: #000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
`;
const HookButton = styled.button`
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #D04545;
    border: none;
    color: #ffffff;
    font-family: inherit;
    font-size: 16px;
    font-weight: 800;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
`;
export { MainContainer, Container, OpenButton, ChangeAmount, Number, Arrow, Content, Details, Image, Liked, Name, Price, PriceChange, Product, ProductContainer, Products, Title, TitleContainer, UpperSection, VendorButton, AddedQnty, Hook, HookButton, HookContainer };