import { useContext } from "react";
import { ActionSection, LoginButton, Logo, MainContainer, Menu, NavUpperSection, Option, OptionContainer, SearchButton, SearchContainer, Searcher, Title, TitleContainer } from "./styles";
import { AuthContext } from "../../context/AuthContext";
const Header = () => {
    
	const {user} = useContext(AuthContext);
    return (
        <>
            <MainContainer>
                <NavUpperSection>
                    <TitleContainer to="/">
                        <Logo src="../../../favicon.png" />
                        <Title>Pedal Price</Title>
                    </TitleContainer>
                    <ActionSection>
                        <SearchContainer>
                            <Searcher type="search" placeholder="Frenos, Amortiguadores..." />
                            <SearchButton>BUSCAR</SearchButton>
                        </SearchContainer>
                        <LoginButton to={!user ? "/login" : "/profile"}>{!user ? "ACCEDER" : "MI PERFIL"}</LoginButton>
                    </ActionSection>
                </NavUpperSection>
                <Menu>
                    <OptionContainer>
                        <Option to="/catalog/all"><p>OFERTAS</p></Option>
                        <Option to="/catalog/all"><p>PRODUCTOS</p></Option>
                        <Option><p>¿QUIENES SOMOS?</p></Option>
                        <Option><p>BLOG</p></Option>
                    </OptionContainer>
                </Menu>
            </MainContainer>
        </>
    );
};

export default Header;