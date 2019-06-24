import * as React from "react";
import styled from "styled-components";

interface IState {
    
}

const FilterMenu: any = styled.div`
    height: 400px;
    margin: 10px 2% 0 0;
    width: 25%;
    background: white;
    box-sizing: border-box;
    box-shadow: 0 1px 6px 0px #b6b2b2
`;

class FilterMenuComponent extends React.Component <IState> {
    public state: IState = {

    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <FilterMenu>
                skdlfjskldjfksjdf
            </FilterMenu>
        )
    }
}

export default FilterMenuComponent;