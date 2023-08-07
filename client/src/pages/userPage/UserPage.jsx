import { LogoutButton, Container, Content, Header, MainContainer, Menu, Option, Overview, OverviewButton, OverviewDetails, OverviewInfoContainer, OverviewTitle, OverviewTitleAddon, OverviewTitleContainer, Payment, PaymentType, Title, PaymentHistoryContainer, SectionTitle, RowContent, Row } from "./styles";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../../firebase/credentials";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const auth = getAuth(firebaseApp);

const UserPage = () => {
	const {user,userLoading} = useContext(AuthContext);

    if (user===null && userLoading===false) {
        return (<Navigate to="/login"/>);
    }
    return (
        <>
        {user ?
            <MainContainer>
                <Header>
                    <Title>Bienvenido a tu panel de usuario {user.name}.</Title>
                    <LogoutButton onClick={() => signOut(auth)}>CERRAR SESIÓN</LogoutButton>
                </Header>
                <Container>
                    <Menu>
                        <Option>SUSCRIPCIÓN</Option>
                        <Option>INFORMACIÓN PERSONAL</Option>
                    </Menu>
                    <Content>
                        <Overview>
                            <OverviewInfoContainer>
                                <OverviewTitleContainer>
                                    <OverviewTitle>PLAN {user.plan.name}</OverviewTitle>
                                    <OverviewTitleAddon></OverviewTitleAddon>
                                </OverviewTitleContainer>
                                <OverviewDetails>
                                    <Payment>{user.plan.price}€ al {user.plan.frequency}</Payment>
                                    <PaymentType>PAGO MENSUAL</PaymentType>
                                </OverviewDetails>
                                <OverviewButton>CAMBIAR PLAN</OverviewButton>
                            </OverviewInfoContainer>
                            <OverviewInfoContainer>
                                <OverviewTitleContainer>
                                    <OverviewTitle>SIGUIENTE PAGO</OverviewTitle>
                                    <OverviewTitleAddon>08/08/2023</OverviewTitleAddon>
                                </OverviewTitleContainer>
                                <OverviewDetails>
                                    <Payment>{user.plan.price}€</Payment>
                                    <PaymentType>PAGO MENSUAL</PaymentType>
                                </OverviewDetails>
                                <OverviewButton>CAMBIAR MÉTODO DE PAGO</OverviewButton>
                            </OverviewInfoContainer>

                        </Overview>
                        <PaymentHistoryContainer>
                            <SectionTitle>Historial de pagos</SectionTitle>
                            <table>
                                <tbody>
                                   {user.payments.map((payment, index) =>
                                    <Row key={index}>
                                        <RowContent>{payment.date}</RowContent>
                                        <RowContent>PLAN {payment.planName} {payment.price}</RowContent>
                                        <RowContent>{payment.state}</RowContent>
                                    </Row>
                                )} 
                                </tbody>
                                
                            </table>
                        </PaymentHistoryContainer>
                    </Content>
                </Container>
            </MainContainer>
            :
            <h1>cargando...</h1>
            }
        </>
    );
};
export default UserPage;