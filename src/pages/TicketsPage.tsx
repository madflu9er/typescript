import * as React from "react";
import styled from "styled-components";
import FlightComponent from "../components/FlightComponent";
import Ticket from "../types/Ticket";
import FilterMenuComponent from "../components/FilterMenuComponent";
import {compareTicketsByPrice, filterFlightsByStops } from "../utils/filter";
import GenerateKey from "../utils/generator";
import logo from "../static/logo.png";

interface IProps {
  tickets: Ticket[]
}

interface IState {
  data: Ticket[],
	filters: number[],
  currency: string,
  currencyCoefficient: number,
}

const PageWrapper: any = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	
	@media(max-width: 480px) {
		height: 150%;
	}
`;

const AviaSalesLogo: any = styled.div`
	width: 100%;
	height: 30%;
	display:flex;
	justify-content: center;
	align-items:center;
	
	@media (max-width: 768px){
		height: 10%
	}
`;

const ImageWrapper: any = styled.div`
	height	50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LogoImage: any = styled.img`
	max-height: 6rem;
	
	@media (max-width: 480px){
  	max-height: 4rem; 	
  }
`;

const Block: any = styled.div`
  padding-left: 2.5%;
  width: 100%;
  height: 100%;
  
  @media (max-width: 430px) {
  	padding: 0 2.5%;
  }
`;

const FilterFlightWrapper: any = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
  {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
   	height: 90%;
  }
}
`;

const EmptyListBlock: any  = styled.div`
		height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    
    @media (max-width: 768px) {
    	height: 100%;
    }
`;

const BlockWrapper: any = styled.div`
  width: 46.5rem;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 480px){
  	width: 100%;
  	height: 65%;  	
  }
}
`;

class TicketsPage extends React.Component<IProps, IState> {

  public state: IState = {
    data: [],
		filters: [0, 1, 2, 3],
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

			<PageWrapper>
				<AviaSalesLogo>
					<ImageWrapper>
						<LogoImage  src={logo}/>
					</ImageWrapper>
				</AviaSalesLogo>
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
								(filterFlightsByStops(filters, tickets).length > 0) ? (filterFlightsByStops(filters, tickets).map(item => (
									<FlightComponent
										currencyCoefficient={currencyCoefficient}
										currency={currency}
										key={GenerateKey(item, "price")}
										ticket={item}
									/>
								))) : (
									<EmptyListBlock>
										По вашему запросу билетов не найдено
									</EmptyListBlock>
								)
							}
						</Block>
					</BlockWrapper>
				</FilterFlightWrapper>
			</PageWrapper>

   );
 }
}

export default TicketsPage;