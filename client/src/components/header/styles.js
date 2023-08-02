import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import SPACING from "../../styles/Spacing";

const MainContainer = styled.nav`
    width: 100%;
    height: 150px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 50px;
`;
const NavUpperSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
`;
const Menu = styled.div`
    width: 100%;
    background-color: #D04545;
    display: flex;
    justify-content: center;
    align-items: center;

`;
const TitleContainer = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
`;
const Logo = styled.img`
    height: 50px;
    width: 50px;
`;
const Title = styled.h1`
    color: #000000;
    font-family: inherit;
    font-size: 42px;
    font-weight: 900;
`;
const ActionSection = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;
const SearchContainer = styled.form`
    display: flex;
    gap: 16px;
    height: 50px;
`;
const Searcher = styled.input`
    padding-left: 16px;
    height: 100%;
    width: 470px;
    border-radius: 8px;
    border: 2px solid #D04545;
    background-color: transparent;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    :focus{
    outline: none;
    }
`;
const SearchButton = styled.button`
    
    height: 100%;
    width: 120px;
    margin-left: -120px;
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



const LoginButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    height: 50px;
    width: 120px;
    color: #D04545;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    border-radius: 8px;
    border: 2px solid #D04545;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    :hover{
        background-color: #D04545;
        color: #ffffff;
        transition: all 0.4s ease-in-out;
    }
`;
const OptionContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 50px;
    gap: 8px;
`;
const Option = styled(NavLink)`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    font-family: inherit;
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
`;

export {MainContainer,Menu,NavUpperSection,ActionSection,LoginButton,Logo,Option,OptionContainer,SearchContainer,Title,TitleContainer,SearchButton,Searcher};