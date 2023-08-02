import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.footer`
    border-top: 0.5px solid black;
    padding: 64px 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const ColumnTitle = styled.h2`
    color: #000;
    font-family: inherit;
    font-size: 42px;
    font-weight: 700;
`;
const ColumnOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const Option = styled(NavLink)`
    color: #000;
    font-family: inherit;
    font-size: 20px;
    font-weight: 400;
`;
export {MainContainer,ColumnOptions,ColumnTitle,FooterColumn,Option};