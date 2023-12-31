import { Desc, DescLine, DescText, LowerSection, Plan, PlanButton, PlanDetails, PlanTitle } from "./styles";

const PlanCard = ({name,price,desc,color,waves}) => {
	return (
		<>
			<Plan color={color}>
                <PlanDetails>
                    <PlanTitle>{name}<br/>{price}</PlanTitle>
                    <Desc>
                        {desc.map((line,index) =>
                            <DescLine key={index}>
                                {line.icon?
                                    <svg width="31" height="30" viewBox="0 0 31 30" fill={color} xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M13.3941 21.9L23.9691 11.325L21.8691 9.225L13.3941 17.7L9.11914 13.425L7.01914 15.525L13.3941 21.9ZM15.4941 30C13.4191 30 11.4691 29.606 9.64414 28.818C7.81914 28.031 6.23164 26.9625 4.88164 25.6125C3.53164 24.2625 2.46314 22.675 1.67614 20.85C0.888141 19.025 0.494141 17.075 0.494141 15C0.494141 12.925 0.888141 10.975 1.67614 9.15C2.46314 7.325 3.53164 5.7375 4.88164 4.3875C6.23164 3.0375 7.81914 1.9685 9.64414 1.1805C11.4691 0.3935 13.4191 0 15.4941 0C17.5691 0 19.5191 0.3935 21.3441 1.1805C23.1691 1.9685 24.7566 3.0375 26.1066 4.3875C27.4566 5.7375 28.5251 7.325 29.3121 9.15C30.1001 10.975 30.4941 12.925 30.4941 15C30.4941 17.075 30.1001 19.025 29.3121 20.85C28.5251 22.675 27.4566 24.2625 26.1066 25.6125C24.7566 26.9625 23.1691 28.031 21.3441 28.818C19.5191 29.606 17.5691 30 15.4941 30Z"/>
                                    </svg>
                                :
                                    <svg width="31" height="30" viewBox="0 0 31 30" fill={color} xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M15.4941 0C12.5274 0 9.62733 0.879735 7.16059 2.52796C4.69386 4.17618 2.77127 6.51886 1.63595 9.25975C0.50064 12.0006 0.20359 15.0166 0.782368 17.9264C1.36115 20.8361 2.78976 23.5088 4.88754 25.6066C6.98533 27.7044 9.65808 29.133 12.5678 29.7118C15.4775 30.2906 18.4935 29.9935 21.2344 28.8582C23.9753 27.7229 26.318 25.8003 27.9662 23.3335C29.6144 20.8668 30.4941 17.9667 30.4941 15C30.4865 11.0241 28.9037 7.21321 26.0923 4.40182C23.2809 1.59042 19.47 0.007624 15.4941 0ZM20.9316 18.7933C21.1483 19.012 21.2699 19.3075 21.2699 19.6154C21.2699 19.9233 21.1483 20.2187 20.9316 20.4375C20.7111 20.6507 20.4163 20.77 20.1095 20.77C19.8027 20.77 19.508 20.6507 19.2874 20.4375L15.4941 16.6298L11.7009 20.4375C11.4803 20.6507 11.1855 20.77 10.8788 20.77C10.572 20.77 10.2772 20.6507 10.0566 20.4375C9.83997 20.2187 9.71842 19.9233 9.71842 19.6154C9.71842 19.3075 9.83997 19.012 10.0566 18.7933L13.8643 15L10.0566 11.2067C9.87265 10.9825 9.77862 10.6979 9.79285 10.4083C9.80707 10.1186 9.92854 9.84455 10.1336 9.63947C10.3387 9.43439 10.6127 9.31293 10.9024 9.2987C11.1921 9.28447 11.4767 9.3785 11.7009 9.5625L15.4941 13.3702L19.2874 9.5625C19.5116 9.3785 19.7962 9.28447 20.0859 9.2987C20.3756 9.31293 20.6496 9.43439 20.8547 9.63947C21.0597 9.84455 21.1812 10.1186 21.1954 10.4083C21.2097 10.6979 21.1156 10.9825 20.9316 11.2067L17.124 15L20.9316 18.7933Z"/>
                                    </svg>
                                
                                }
                                <DescText>{line.text}</DescText>
                                
                            </DescLine>
                        )}
                    </Desc>
                    <PlanButton color={color}>¡LO QUIERO!</PlanButton>
                </PlanDetails>
                <LowerSection imageSrc={waves}></LowerSection>
                
            </Plan>
		</>
	);
};

export default PlanCard;