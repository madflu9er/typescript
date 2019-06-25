import * as React from "react";
import styled from "styled-components";
import Ticket from "../types/Ticket";
import BuyButtonComponent from "./BuyButtonComponent";
import FlightInformationComponent from "./FlightInformationComponent";
import formDateString from "../utils/helper";

interface IProps {
  ticket: Ticket,
  currency: string,
  currencyCoefficient: number
}

const Block: any = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  height: 200px;
  margin: 10px 0;
  background: #FFFFFF;
  box-shadow: 0 1px 6px 0px #b6b2b2
  border-radius: 7px;
`;

const TicketCompany: any = styled.div`
  height: 100%;
  width: 35%;
  border-right: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TicketDetails: any = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Airlines: any = styled.img`
  max-width: 80%;
`;

const AirLinesImageWrapper: any = styled.div`
  height: 40%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
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
            <div>----------------------</div>
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

