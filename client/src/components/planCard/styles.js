import styled from "styled-components";

const Plan = styled.div`
    color: ${props=>props.color};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 3px 7px 10px 0px ${props=>props.color};
`;
const PlanDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 16px 32px;
    
`;
const PlanTitle = styled.p`
    text-align: center;
    font-family: inherit;
    font-size: 36px;
    font-weight: 900;
    
`;
const Desc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    
`;
const DescLine = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
    gap: 8px;
`;

const DescText = styled.p`
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
`;
const PlanButton = styled.button`
    align-self: center;
    width: 200px;
    height: 50px;
    color: #FFFFFF;
    text-align: center;
    font-family: inherit;
    font-size: 20px;
    font-weight: 900;
    border-radius: 4px;
    border: none;
    background-color: ${props=>props.color};
    cursor: pointer;
`;
const LowerSection = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 100px;
    background-image: url(${props=>props.imageSrc});
    background-repeat: no-repeat;
    background-size: 102%;
`;
export {Plan,Desc,DescLine,DescText,LowerSection,PlanButton,PlanDetails,PlanTitle};