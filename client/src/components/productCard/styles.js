import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Product = styled(NavLink)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 4px;
    background: #FFFFFF;
    width: 100%;
    height: 100%;
    padding: 8px;
`;
const UpperSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background-image: url(${props=>props.imageSrc});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    height: 100%;
`;
const PriceChange = styled.div`
    display: flex;
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
const LikeButton = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 100%;
    border: 1px solid #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2px;
    cursor: pointer;
`;
const LowerSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const Title = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
`;
const Price = styled.p`
    color: #000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
`;
const BeforePrice = styled.span`
    color: #000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    text-decoration: line-through;
    margin-right: 8px;
`;
const Vendor = styled.p`
    align-self: center;
    color: #000;
    font-family: inherit;
    font-size: 10px;
    font-weight: 400;
`;
export {Product,Arrow,BeforePrice,Details,LikeButton,LowerSection,Price,PriceChange,Title,UpperSection,Vendor};