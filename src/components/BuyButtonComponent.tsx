import * as React from "react";
import styled from "styled-components";

interface  IProps {
	currency: string,
	price: number,
	handleBuy(): void,
}

const ButtonWrapper: any = styled.div`
	height: 5rem;
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Button: any = styled.button`

	height: 75%;
  width: 75%;
	color: white;
	background: #FF6D00;
	border: none;
	font-size: 1.3rem;
	border-radius: 5px;
	box-shadow: 0 1px 2px 1px #DD5306 

	:hover {
    background: #FF8124;
    cursor: pointer
		box-shadow: 0 1px 2px 1px #FF8124 
  }
  
  @media (max-width: 430px){
  	width: 90%;
  }
`;

const BuyButtonComponent: React.FC<IProps> = (props) => {

	const { price, currency, handleBuy } = props;

	return (
		<ButtonWrapper>
			<Button onClick={handleBuy}>
				Купить <br/> за {price} {currency}
			</Button>
		</ButtonWrapper>
	);
};

export default BuyButtonComponent;
