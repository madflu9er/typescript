import * as React from "react";
import styled from "styled-components";

interface IProps {
	changeCurrency(newCurrencyCoefficient: number, currencySymbol: string): void
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

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
			const { changeCurrency } = this.props;
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
									<input type="checkbox" id="c1" name=" cc"/>
									<label htmlFor="c1"><span/>
										Все
									</label>
									<input type="checkbox" id="c2" name="cc"/>
									<label htmlFor="c2"><span/>
										Без пересадок
									</label>
									<input type="checkbox" id="c3" name="cc"/>
									<label htmlFor="c3"><span/>
										1 Пересадка
									</label>
									<input type="checkbox" id="c4" name="cc"/>
									<label htmlFor="c4"><span/>
										2 Пересадки
									</label>
									<input type="checkbox" id="c5" name="cc"/>
									<label htmlFor="c5"><span/>
										3 Пересадки
									</label>
								</div>
							</div>
            </FilterMenu>
        )
    }
}

export default FilterMenuComponent;