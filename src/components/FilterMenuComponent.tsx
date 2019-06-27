import * as React from "react";
import styled from "styled-components";

interface IProps {
	changeCurrency(newCurrencyCoefficient: number, currencySymbol: string): void,
	replaceFilters(newFiltersArray: number[]): void,
	filter: number[],
	currency: string,
}

const FilterMenu: any = styled.div`
	height: 20rem;
	margin: 10px 2% 0 0;
	width: 17rem;
	background: white;
	box-sizing: border-box;
	box-shadow: 0 1px 6px 0px #b6b2b2;
	
	@media (max-width: 768px) {
  {
  	width: 43rem;
    display: flex;
    padding-top: 1%;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  
  @media (max-width: 430px) {
  {
  	width: 100%;
  	height:40%;
     flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }  
`;

const FilterCurrencyBlock = styled.div`
	height: 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	padding: 0 10%;
	
	@media (max-width: 768px) {
  {
  	width: 50%;
    padding: 0 5%;
  };
`;

const FilterButtonsBlock = styled.div`
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 0 10%;
	
	@media (max-width: 768px) {
  {
  	width: 50%;
    padding: 0 5%;
    height: 90%;
  };
`;

const CheckBoxBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 10.5rem;
`;

const CheckBoxButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	align-items:flex-start;
	height:20%;
	position: relative;
	
	:hover{
		background: #2196f373;
	}
	
	label:before {
		content: '';
    position: absolute;
    top: 50;
    left: 0;
    width: 1.5625rem;
    height: 1.5625rem;
    border-radius: 6px;
    background: transparent;
    border: 1.4px solid #9e9c9c;
    transition: .2s;
	}
	
	input {
		height: 100%;
		width: 10%;
		margin: 0;
		display:flex;
		justify-content:center;
		align-items:center;
	 	position: absolute;
  	z-index: -1;
  	opacity: 0;
	}
	
	input:checked + label:before {
  	border-color: #2196F3;
	}
	
	input:checked + label:after {
		content: '';
    position: absolute;
    top: 50;
    left: 0.625rem;
    width: 0.3125rem;
    height: 0.625rem;
    border: solid #2196F3;
    border-width: 0 0.1875rem 0.1875rem 0;
    transform: rotate(45deg);
	}
	
	label {
		height:100%;
		display:flex;
		justify-content: flex-start;
		align-items: center;
		width: 90%
		padding: 0 0% 0 2rem;
    box-sizing: border-box;
	}
`;

const CurrencyBlockName = styled.div `
	font-size: 1rem;
	font-family: sans-serif;
	color: #555555;
	font-weight: bold;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CurrencySwitchButtonsBlock = styled.div`
	border: 1px solid #2196F3;
	padding: 0;
	height: 2.4rem;
	display: flex;
	justify-content: center;
	width: 100%;
	border-radius: 10px;
`;

const CurrencySwitchButton: any = styled.button`
	width: 33.3%;
	border: none;
	background: white; 
	text-align: center;
	color: #2196F3;
	outline-color: transparent
	font-size: 1rem;
	height: 2.38em;
`;

const CurrencySwitchButtonRub: any = styled(CurrencySwitchButton)`
		border-radius: ${props => (props.currency === "₽" ?"5px 0px 0px 5px":"10px 0px 0px 10px")};
		background: ${props => (props.currency === "₽" ? "#2196F3" : "white")};
		color: ${props => (props.currency === "₽" ? "white" : "#2196F3")};
		:hover {
			background: ${props => (props.currency === "₽" ? "#2196F3" : "#F2FCFF")};
			color: ${props => (props.currency === "₽" ? "white" : "#2196F3")};
			border-radius: ${props => (props.currency === "₽" ?"5px 0px 0px 5px":"10px 0px 0px 10px")};
		}
`;


const CurrencySwitchButtonEur: any = styled(CurrencySwitchButton)`
	border-radius: ${props => (props.currency === "€" ?"0px 5px 5px 0px":"0px 10px 10px 0px")};
	background: ${props => (props.currency === "€" ? "#2196F3" : "white")};
	color: ${props => (props.currency === "€" ? "white" : "#2196F3")};
	:hover {
			background: ${props => (props.currency === "€" ? "#2196F3" : "#F2FCFF")};
			color: ${props => (props.currency === "€" ? "white" : "#2196F3")};
			border-radius: ${props => (props.currency === "€" ?"0px 5px 5px 0px":"0px 10px 10px 0px")};
		}
`;

const CurrencySwitchButtonUsd: any = styled(CurrencySwitchButton)`
	border-right: 1px solid #2196F3;
	border-left: 1px solid #2196F3;
	background: ${props => (props.currency === "$" ? "#2196F3" : "white")};
	color: ${props => (props.currency === "$" ? "white" : "#2196F3")};
	:hover {
		background: ${props => (props.currency === "$" ? "#2196F3" : "#F2FCFF")};
		color: ${props => (props.currency === "$" ? "white" : "#2196F3")};
	}
`;

const StopsBlockName = styled(CurrencyBlockName)`
	height	20%;
`;

class FilterMenuComponent extends React.Component <IProps> {

		public handleChangeFilter(checked: boolean, filterValue: number, previousFilter: number[]): void {
			const { replaceFilters } = this.props;

			if(checked) {
				if(filterValue === -1) {
					previousFilter = [-1, 0, 1, 2, 3];
				} else {
					previousFilter.push(filterValue);
				}
			} else {
				previousFilter.splice(previousFilter.indexOf(filterValue, 0), 1);
			}
			replaceFilters(previousFilter);
		}

		public checkNeedStateToBeChanged(state: boolean):void {
			const { filter } = this.props;
			if(state && filter.length !== 5) {
				this.handleChangeFilter(state, -1, filter)
			}
		}

    render(): React.ReactElement<React.JSXElementConstructor<any>> {
			const { changeCurrency, filter, currency } = this.props;
        return (
            <FilterMenu>
                <FilterCurrencyBlock>
									<CurrencyBlockName>ВАЛЮТА</CurrencyBlockName>
									<CurrencySwitchButtonsBlock>
										<CurrencySwitchButtonRub
											currency = {currency}
											onClick={()=>{changeCurrency(1, "₽")}}
										>
											RUB
										</CurrencySwitchButtonRub>
										<CurrencySwitchButtonUsd
											currency = {currency}
											onClick={()=>{changeCurrency(0.01587, "$")}}
										>
											USD
										</CurrencySwitchButtonUsd>
										<CurrencySwitchButtonEur
											currency = {currency}
											onClick={()=>{changeCurrency(0.01393, "€")}}
										>
											EUR
										</CurrencySwitchButtonEur>
									</CurrencySwitchButtonsBlock>
								</FilterCurrencyBlock>
							<FilterButtonsBlock>
								<StopsBlockName>КОЛИЧЕСТВО ПЕРЕСАДОК</StopsBlockName>
								<CheckBoxBlock>
									<CheckBoxButtonWrapper>
										<input
											onChange={(e) => { this.checkNeedStateToBeChanged(e.target.checked); console.log(e.target.checked); }}
											type="checkbox"
											id="-1"
											name="allAvailable"
											checked={filter.length === 5}
										/>
										<label htmlFor="-1"><span/>
											Все
										</label>
									</CheckBoxButtonWrapper>
									<CheckBoxButtonWrapper>
										<input
											onChange={(e) => {  this.handleChangeFilter(e.target.checked, 0, filter) }}
											type="checkbox"
											id="0"
											name="withoutStops"
											checked = {filter.includes(0)}
										/>
										<label htmlFor="0"><span/>
											Без пересадок
										</label>
									</CheckBoxButtonWrapper>
									<CheckBoxButtonWrapper>
										<input
											onChange={(e) => { this.handleChangeFilter(e.target.checked, 1, filter) }}
											type="checkbox"
											id="1"
											name="withOneStop"
											checked = {filter.includes(1)}
										/>
										<label htmlFor="1"><span/>
											1 Пересадка
										</label>
									</CheckBoxButtonWrapper>
									<CheckBoxButtonWrapper>
										<input
											onChange={(e) => { this.handleChangeFilter(e.target.checked, 2, filter) }}
											type="checkbox"
											id="2"
											name="withTwoStops"
											checked = {filter.includes(2)}
										/>
										<label htmlFor="2"><span/>
											2 Пересадки
										</label>
									</CheckBoxButtonWrapper>
									<CheckBoxButtonWrapper>
										<input
											onChange={(e) => { this.handleChangeFilter(e.target.checked, 3, filter) }}
											type="checkbox"
											id="3"
											name="withThreeStops"
											checked = {filter.includes(3)}
										/>
										<label htmlFor="3"><span/>
											3 Пересадки
										</label>
									</CheckBoxButtonWrapper>
								</CheckBoxBlock>
							</FilterButtonsBlock>
            </FilterMenu>
        )
    }
}

export default FilterMenuComponent;