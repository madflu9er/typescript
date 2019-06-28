import * as React from "react";
import styled from "styled-components"

interface IProps {
	time: string,
	index: string,
	city: string,
	date: string,
	textAlign: string,
}

const Block: any = styled.div`
	padding: 0 4%;
	box-sizing: border-box;
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	text-align: ${(props: any) => props.align}
	
	@media (max-width: 430px) {
		padding: 0% 2% 0 2%;
  }
`;

const TimeBlock: any = styled.div`
	width:100%;
	font-size 2rem;
	font-family: sans-serif;
	color: #555555;
	margin-top:0.6rem;
`;

const CityBlock: any = styled(TimeBlock)`
	font-size: 0.94rem;
	margin-top: 0.4rem;
`;

const DateBlock: any = styled(CityBlock)`
	color: #A2A9AB;
	font-size: 0.7rem;
	margin-top: 0.2rem;
`;

const FlightInformationComponent: React.FC<IProps> = (props) => {
	const {time, index, city, date, textAlign} = props;

	return (
		<Block align = {textAlign}>
			<TimeBlock>{time}</TimeBlock>
			<CityBlock>{`${index}, ${city}`}</CityBlock>
			<DateBlock>{date}</DateBlock>
		</Block>
	)
};

export default FlightInformationComponent;