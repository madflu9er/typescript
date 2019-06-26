import * as React from "react";
import styled from "styled-components";

interface IProps {
	changeCurrency(newCurrencyCoefficient: number, currencySymbol: string): void,
	replaceFilters(newFiltersArray: number[]): void,
	filter: number[]
}

const FilterMenu: any = styled.div`
    height: 400px;
    margin: 10px 2% 0 0;
    width: 22%;
    background: white;
    box-sizing: border-box;
    box-shadow: 0 1px 6px 0px #b6b2b2
`;

class FilterMenuComponent extends React.Component <IProps> {

		public handleChangeFilter(checked: boolean, filterValue: number, previousFilter: number[]): void {
			const { replaceFilters } = this.props;

			if(checked) {
				if(filterValue === -1) {
					previousFilter = [];
				} else {
					previousFilter.push(filterValue);
				}
			} else {
				previousFilter.splice(previousFilter.indexOf(filterValue, 0), 1);
			}

			replaceFilters(previousFilter);
		}

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
			const { changeCurrency, filter } = this.props;
        return (
            <FilterMenu>
                <div>
									<div>ВАЛЮТА</div>
									<div>
										<button onClick={()=>{changeCurrency(1, "₽")}}>RUB</button>
										<button onClick={()=>{changeCurrency(0.01587, "$")}}>USD</button>
										<button onClick={()=>{changeCurrency(0.01393, "€")}}>EUR</button>
									</div>
								</div>
							<div>
								<div>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
								<div>
									<input
										onChange={(e) => { this.handleChangeFilter(e.target.checked, -1, filter) }}
										type="checkbox"
										id="-1"
										name="allAvailable"
										checked={filter.length === 0}
									/>
									<label htmlFor="-1"><span/>
										Все
									</label>
									<input
										onChange={(e) => { this.handleChangeFilter(e.target.checked, 0, filter) }}
										type="checkbox"
										id="0"
										name="withoutStops"
										checked = {filter.includes(0)}
									/>
									<label htmlFor="0"><span/>
										Без пересадок
									</label>
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
								</div>
							</div>
            </FilterMenu>
        )
    }
}

export default FilterMenuComponent;