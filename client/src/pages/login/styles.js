import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import SPACING from "../../styles/Spacing";

const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url("../../../assets/login/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    position: relative;
    display: grid;
    grid-template-columns: 500px 1fr;
    gap: 64px;
    padding: 32px 100px;
`;
const Header = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    padding: 32px 100px;
    display: flex;
    justify-content: end;
    align-items: center;
    z-index: 2;
`;
const Mask = styled.div`
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.3;
`;

const BackButton = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
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
const FormContainer = styled.section`
    z-index: 1;
    height: 100%;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 32px ;
    padding-bottom: 16px;

`;
const Form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
`;
const FormTitle = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 16px;
`;
const Input = styled.input`
    border: none;
    color: #000;
    background-color: #fafafa;
    font-family: inherit;
    font-size: 20px;
    font-weight: 500;
    padding: 16px 16px;
    border-radius: 16px;
    :focus{
        background-color: #f2f2f2;
        outline: none;
    }
`;
const PasswordForget = styled.a`
    align-self: center;
    color: #000;
    font-family: inherit;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
`;
const Button = styled.button`
    margin-top: 16px;
    padding: 16px 0;
    border-radius: 8px;
    background-color: #D04545;
    border: none;
    color: #ffffff;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
`;
const OtherWays = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
`;
const Caption = styled.p`
    color: gray;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 16px;
`;
const Options = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`;
const Option = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 8px;
    background-color: #fafafa;
    padding: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #f2f2f2;
        transition: all 0.2s ease-in-out;
    }
`;
const RegisterOption = styled.div`
    padding-top: 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    h2{
        font-size: 16px;
        padding: 0;
    }
`;
const RegisterButton = styled.a`
    color: #D04545;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        text-decoration:underline;
        transition: all 0.2s ease-in-out;
    }
`;
const OnboardingContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
const Onboarding = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 70%;
`;
const Text = styled.div`
    color: #ffffff;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
`;
const Steps = styled.div`
    display: flex;
    gap: 8px;
`;
const Step = styled.div`
    width: 32px;
    height: 8px;
    background-color: #FFFFFF;
    border-radius: 4px;
    &.actual{
        width: 64px; 
        background-color: #D04545;
    }
`;
export {MainContainer,Header,NavLink,BackButton,FormContainer,Form,Button,FormTitle,Input,Option,Options,OtherWays,Caption,Onboarding,OnboardingContainer,Step,Steps,Text,Mask,PasswordForget,RegisterOption,RegisterButton};