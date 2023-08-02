import styled from "styled-components";
// import SPACING from "../../styles/Spacing";

const MainContainer = styled.main`
    width: 100%;
    padding: 32px 100px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;
const Header = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 28px;
    font-weight: 700;
`;
const LogoutButton = styled.button`
    width: fit-content;
    padding: 8px 20px;
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
const Container = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 64px;
`;
const Menu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const Option = styled.div`
    width: 100%;
    height: 50px;
    border-radius:4px ;
    background-color: #D04545;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #B23B3B;
        transition: all 0.2s ease-in-out;
    }
`;
const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;
const Overview = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px;
    gap: 15px;
`;
const OverviewInfoContainer = styled.div`
    background-color:#ffffff;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`;
const OverviewTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const OverviewDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
const OverviewTitle = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 20px;
    font-weight: 800;
`;
const OverviewTitleAddon = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
`;
const Payment = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 32px;
    font-weight: 900;
`;
const PaymentType = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
`;
const OverviewButton = styled.button`
    width: fit-content;
    padding: 8px 20px;
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
const PaymentHistoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const SectionTitle = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
`;
const Row = styled.tr`
    background-color: #ffffff;
    :nth-child(even) {
    background-color: #f5f5f5;
    }
`;
const RowContent = styled.td`
    padding: 8px 16px;
    text-align: center;
    color: #000;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    :first-child{
        text-align: left;
    }
`;
export {MainContainer,LogoutButton,Header,Title,Container,Menu,Option,Content,OverviewInfoContainer,Overview,OverviewTitle,OverviewTitleAddon,OverviewTitleContainer,OverviewButton,Payment,PaymentType,OverviewDetails,PaymentHistoryContainer,Row,RowContent,SectionTitle};