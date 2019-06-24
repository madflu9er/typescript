import * as React from "react";
import styled from "styled-components";

interface  IProps {
	currency: string,
	price: number,
	handleBuy(): void,
}


const Button: any = styled.button`

	height: 30%;
	width: 70%;
	color: white;
	background: #FF6D00;
	border: none;
	font-size: 1.3vw;
	border-radius: 5px;
	box-shadow: 0 1px 2px 1px #DD5306 

	:hover {
    background: #FF8124;
    cursor: pointer
		box-shadow: 0 1px 2px 1px #FF8124 
  }
`;

const BuyButtonComponent: React.FC<IProps> = (props) => {
	return (
		<Button onClick={props.handleBuy}>
			Купить за {props.price} {props.currency}
		</Button>
	);
};

export default BuyButtonComponent;
