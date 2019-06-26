import * as React from "react";
import styled from "styled-components"

const Block: any = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const TimeBlock: any = styled.div`
	width:80%;
	text-align: left;
	font-size 3vw;
	font-family: sans-serif;
	color: #555555;
`;

const CityBlock: any = styled(TimeBlock)`
	font-size: 1.1vw
`;

const DateBlock: any = styled(CityBlock)`
	color: #A2A9AB;
`;

interface IProps {
	time: string,
	index: string,
	city: string,
	date: string
}

const FlightInformationComponent: React.FC<IProps> = (props) => {
	const {time, index, city, date} = props;

	return (
		<Block>
			<TimeBlock>{time}</TimeBlock>
			<CityBlock>{`${index}, ${city}`}</CityBlock>
			<DateBlock>{date}</DateBlock>
		</Block>
	)
};

export default FlightInformationComponent;