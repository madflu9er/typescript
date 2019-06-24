import * as React from "react";
import styled from "styled-components";
import Ticket from "../types/Ticket";
import BuyButtonComponent from "./BuyButtonComponent";

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
    height: 100%
    width: 75%;
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
    console.log("i bought this ticket for "+ price);
  }

  public handleSwitchCurrencySymbol(currency: string): string {
    switch(currency) {
      case "rub" : return "₽";
      case "usd" : return "€";
      case "eur" : return "$";
      default: return "";
    }
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
              currency={this.handleSwitchCurrencySymbol(currency)}
              price={ticket.price * currencyCoefficient}
              handleBuy={() => {this.handleBuy(ticket.price)}}
            />
          </TicketCompany>
          <TicketDetails>
          </TicketDetails>
        </Block>
    )
  }
}

export default FlightComponent

