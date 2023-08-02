import styled from "styled-components";
// import SPACING from "../../styles/Spacing";

const MainContainer = styled.main`
    width: 100%;
`;
const UpperSection = styled.section`
    width: 100%;
    padding: 32px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-bottom: 0.5px solid black;
`;
const Title = styled.h2`
    text-align: center;
    color: #000;
    text-align: center;
    font-family: inherit;
    font-size: 36px;
    font-weight: 800;
`;
const Highlight = styled.span`
    color: #D04545;
    font-family: inherit;
    font-size: 36px;
    font-weight: 900;
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
const Caption = styled.p`
    color: #000;
    text-align: center;
    font-family: inherit;
    font-size: 10px;
    font-weight: 400;
`;
const LowerSection = styled.section`
    padding: 32px 100px;    
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 32px;
`;
const FilterContainer = styled.div`
     
    display: flex;
    flex-direction: column;
    gap: 32px;
`;
const Filters = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

`;
const Filter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const FilterName = styled.p`
    color: #000;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
`;
const FilterOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const OptionsLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;
const PriceRange = styled.input`

`;
const RadioButon = styled.input`
    height: 24px;
    width: 24px;
`;
const CheckBox = styled.input`
    height: 24px;
    width: 24px;
    :checked{
        background-color: #D04545 ;
    }
`;
const CheckBoxLabel = styled.label`
    color: #000;
    font-family: inherit;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 12px;
`;
const ResultContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 400px;
    gap:16px;
`;
const Pagination = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 32px;
`;
const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    cursor: pointer;
    &.selected{
        background-color: #D04545;
    }
`;
const Num = styled.p`
    color: #000;
    font-family: inherit;
    font-size: 20px;
    font-weight: 400;
    &.selected{
        color: #fff;
    }
`;
export {MainContainer,Caption,Filter,Highlight,FilterContainer,FilterName,FilterOptions,Filters,LowerSection, Pagination,ResultContainer,SearchButton,SearchContainer,Searcher,Title,UpperSection,PriceRange,CheckBox,CheckBoxLabel,OptionsLine,RadioButon,Num,Page};