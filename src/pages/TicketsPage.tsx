import * as React from "react";
import styled from "styled-components";
import FlightComponent from "../components/FlightComponent";
import Ticket from "../types/Ticket";
import FilterMenuComponent from "../components/FilterMenuComponent";
import {compareTicketsByPrice, filterFlightsByStops } from "../utils/filter";
import GenerateKey from "../utils/generator";

interface IProps {
  tickets: Ticket[]
}

interface IState {
  data: Ticket[],
	filters: number[],
  currency: string,
  currencyCoefficient: number,
}

const Block: any = styled.div`
  padding-left: 2.5%;
  width: 100%;
  height: 100%;
  
  @media (max-width: 430px) {
  	padding: 0 2.5%;
  }
`;

const FilterFlightWrapper: any = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 10% 0 0 0;
  
  @media (max-width: 768px) {
  {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
}
`;

const BlockWrapper: any = styled.div`
  width: 46.5rem;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 430px){
  	width: 100%;
  }
}
`;

class TicketsPage extends React.Component<IProps, IState> {

  public state: IState = {
    data: [],
		filters: [-1, 0, 1, 2, 3],
    currency: "₽",
    currencyCoefficient: 1
  };

  public componentDidMount(){
    const { tickets } = this.props;

    this.setState({
      data: tickets.sort(compareTicketsByPrice)
    });
  }

  public changeCurrency (newCurrencyCoefficient: number, currencySymbol: string): void {
    this.setState({
      currencyCoefficient: newCurrencyCoefficient,
      currency: currencySymbol
    });
  }

  public replaceFilters (newFiltersArray: number[]): void {
  	this.setState({
			filters: newFiltersArray
		})
	}

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {

    const {tickets} = this.props;
    const  { currency, currencyCoefficient, filters } = this.state;



    return(
      <FilterFlightWrapper>
        <FilterMenuComponent
					replaceFilters = {this.replaceFilters.bind(this)}
          changeCurrency={this.changeCurrency.bind(this)}
					filter = {filters}
					currency = {currency}
        />
        <BlockWrapper>
          <Block>
            {
							filterFlightsByStops(filters, tickets).map(item => (
                <FlightComponent
                  currencyCoefficient={currencyCoefficient}
                  currency={currency}
                  key={GenerateKey(item, "price")}
                  ticket={item}
                />
              ))
            }
           </Block>
        </BlockWrapper>
      </FilterFlightWrapper>
   );
 }
}

export default TicketsPage;