import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 64px;
    
`;
const HookContainer = styled.div`
    width: 100%;
    height: 400px;
    background-image: url("../../../assets/home/hook-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 100px;
    gap: 16px;
`;
const HookTitle = styled.h2`
    color: #FFF;
    font-family: inherit;
    font-size: 42px;
    font-weight: 900;
`;
const Highlight = styled.span`
    color: #FFF;
    font-family: inherit;
    font-size: 42px;
    font-weight: 900;
    background-color: #D04545;
`;
const HookCaption = styled.p`
    color: #FFF;
    font-family: inherit;
    font-size: 20px;
    font-weight: 600;
`;

const EmailFormContainer = styled.form`
    display: flex;
    gap: 16px;
    height: 50px;
`;
const Email = styled.input`
    padding-left: 16px;
    height: 100%;
    width: 400px;
    border-radius: 8px;
    border: none;
    background-color: #fafafa;
    font-family: inherit;
    font-weight: 600;
    font-size: 15px;
    :focus{
    outline: none;
    }
`;
const CreateButton = styled.button`
    
    height: 100%;
    width: 120px;
    border-radius: 8px;
    background-color: #D04545;
    border: none;
    color: #ffffff;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
    
`;
const Categories = styled.section`
    
    height: 500px;
    width: 100%;
    padding: 0 100px;
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
    grid-template-areas: 
    "primary secondary secondary"
    "primary other other";
    
`;

const CategoryContainer = styled.div`
    background-image: url(${props => props.imageSrc});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 32px;
    padding-bottom: 16px;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :first-child{
        grid-area: primary;
    }
    :nth-child(2){
        grid-area: secondary;
    }
    :last-child{
        grid-area: other;
    }
    :hover{
        transition: all 0.3s ease-in-out;
        background-size: 105%;

    }
`;
const CategoryTitle = styled.p`
    color: #FFF;
    font-family: inherit;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const ProductSection = styled.section`
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;
const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const SectionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const SectionTitle = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 42px;
    font-weight: 800;
`;
const TitleUnderline = styled.div`
    width: 50px;
    height: 4px;
    background-color: #D04545;
`;
const SeeMoreButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 34px;
    border-radius: 4px;
    background: #D04545;
    color: #FFF;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
`;
const Products = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 400px;
    gap:16px;
`;
const PlanSection = styled.section`
    padding: 32px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
    text-align: center;
    h2 {
        color: #000000;
    }
`;
const PaymentFrequency = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   width: 300px;
   height: 40px;
   border-radius: 4px;
   border: 1px solid #D04545;
`;
const FrequencyOption = styled.div`
    color: #D04545;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
    &.selected{
        color: #ffffff;
        background-color: #D04545;
    }
`;
const Plans = styled.div`
    display: grid;
    grid-template-columns: 370px 370px 370px;
    grid-template-rows: 450px;
    gap: 32px;
`;
const BlogSection = styled.div`
    padding-top: 64px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Gradient = styled.div`
    width: 100%;
    height: 30px;
    background: linear-gradient(180deg, rgba(250,250,250,1) 00%, rgba(235,226,209,1) 100%);
    
`;
const BlogBgImg = styled.div`
    width: 100%;
    height: 400px;
    background-image: url("../../../assets/home/blog_background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 32px 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    
`;
const RightSection = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 32px;
    align-items: center;
    justify-items: center;
    text-align: center;
    h2{
        color: black;
    }
`;
const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: flex-start;
`;
const BlogButton = styled.button`
    align-self: flex-start;
    height: 50px;
    padding: 0 16px;
    border-radius: 4px;
    background: #D04545;
    color: #FFF;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
`;
const ArticleResume = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background: rgba(253, 249, 248, 0.80);
    max-width: 455px;
    width: 455px;
    :last-child{
        align-self: flex-end;
    }
`;
const ArticleTitle = styled.h3`
    color: #000;
    font-family: inherit;
    font-size: 24px;
    font-weight: 700;
`;
const ArticleText = styled.p`
    color: #000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
`;

export { MainContainer, HookContainer, CreateButton, Email, EmailFormContainer, HookCaption, HookTitle, Highlight, Categories, CategoryContainer, CategoryTitle, ProductSection, SectionHeader, SectionTitle, SectionTitleContainer, SeeMoreButton, TitleUnderline, Products, PlanSection, FrequencyOption, PaymentFrequency, Plans, BlogSection, BlogBgImg, Gradient, ArticleResume, ArticleText, ArticleTitle, LeftSection, RightSection, BlogButton };