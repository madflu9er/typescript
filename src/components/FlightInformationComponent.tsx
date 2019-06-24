import * as React from "react";
import styled from "styled-components"

interface IProps {
	time: string,
	index: string,
	city: string,
	date: string
}

const Block: any = styled.div`
	width: 33%;
`;

const FlightInformationComponent: React.FC<IProps> = (props) => {
	const {time, index, city, date} = props;

	return (
		<Block>
			<div>{time}</div>
			<div>{`${index}, ${city}`}</div>
			<div>{date}</div>
		</Block>
	)
};

export default FlightInformationComponent;