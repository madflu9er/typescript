import * as React from "react";
import styled from "styled-components";
import Ticket from "../types/Ticket";
import BuyButtonComponent from "./BuyButtonComponent";
import FlightInformationComponent from "./FlightInformationComponent";
import { formDateString, createStringFromStops } from "../utils/helper";

interface IProps {
  ticket: Ticket,
  currency: string,
  currencyCoefficient: number
}

const Block: any = styled.div`
  width: 43rem;
  height: 10rem;
  display: flex;
  box-sizing: border-box;
  margin: 10px 0;
  background: #FFFFFF;
  box-shadow: 0 1px 6px 0px #b6b2b2
  border-radius: 7px;
  
  @media (max-width: 430px){
  	width: 100%;
  	flex-direction: column-reverse;
    height: 40%;
  }
`;

const TicketCompany: any = styled.div`
  height: 100%;
  width: 35%;
  border-right: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (max-width:430px) {
    width: 100%;
    height: 60%
  }
`;

const TicketDetails: any = styled.div`
  display: flex;
  height: 6rem;
  width: 65%;
  justify-content: center;
  align-items: center;
  
  @media (max-width:430px) {
    width: 100%;
    height: 40%;
  }
`;

const Airlines: any = styled.img`
  max-width: 80%;
  @media (max-width:430px) {
    max-width: 35%;
  }
`;

const AirLinesImageWrapper: any = styled.div`
  height: 4.25rem;
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  
  @media (max-width:430px) {
    height: 50%;
  }
`;

const FlightDecorationText: any = styled.div`
	font-size: 0.9rem;
	color: #A2A9AB;
`;

const FlightDecorationBlock: any = styled.div`
	font-size: 20px;
	height: 50%;
	width: 24%;
	color: #A2A9AB;
	position: relative;
	padding: 0 2% 0% 0;
	
	i {
		position: absolute;
    top: 0;
    right: -10px;
	}
`;

const FlightDecorationIcon: any = styled.div`
	font-size: 1rem;
	height: 15%
	width: 100%;
	border-bottom: 1px solid #A2A9AB;
	color: #A2A9AB;
	position: relative;
	
	i {
		position: absolute;
    top: 0;
    right: -10px;
	}
`;

class FlightComponent extends React.Component<IProps> {

  public handleBuy(price: number): void {
    const { currencyCoefficient } = this.props;
    console.log("i bought this ticket for "+ price * currencyCoefficient);
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
   const { ticket, currency, currencyCoefficient } = this.props;

    return(
        <Block>
          <TicketCompany>
            <AirLinesImageWrapper>
              <Airlines src="/airlines.webp"/>
            </AirLinesImageWrapper>
            <BuyButtonComponent
              currency={currency}
              price={ Number((ticket.price * currencyCoefficient).toFixed(2))}
              handleBuy={() => {this.handleBuy(ticket.price)}}
            />
          </TicketCompany>
          <TicketDetails>
            <FlightInformationComponent
              city={ticket.origin_name}
              index={ticket.origin}
              date={formDateString(ticket.departure_date)}
              time={ticket.departure_time}
            />
            <FlightDecorationBlock>
							<FlightDecorationText>
								{createStringFromStops(ticket.stops)}
							</FlightDecorationText>
							<FlightDecorationIcon>
								<i className="fas fa-plane" />
							</FlightDecorationIcon>
						</FlightDecorationBlock>
            <FlightInformationComponent
              city={ticket.destination_name}
              index={ticket.destination}
              date={formDateString(ticket.arrival_date)}
              time={ticket.arrival_time}
            />
          </TicketDetails>
        </Block>
    )
  }
}

export default FlightComponent

