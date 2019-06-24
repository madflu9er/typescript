import * as React from "react";
import styled from "styled-components";
import FlightComponent from "../components/FlightComponent";
import Ticket from "../types/Ticket";
import FilterMenuComponent from "../components/FilterMenuComponent";

interface IProps {
  tickets: Ticket[]
}

interface IState {
  data: Ticket[],
}

const Block: any = styled.div`
  padding: 0 2%;
  width: 100%;
  height: 100%;
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
`;

const BlockWrapper: any = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
`;


class TicketsPage extends React.Component<IProps, IState> {

  public state: IState = {
    data: [],
  };

  public componentDidMount(){
    const { tickets } = this.props;

    this.setState({
      data: tickets
    });
  }


  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {

    const {tickets} = this.props;

    return(
      <FilterFlightWrapper>
        <FilterMenuComponent />
          <BlockWrapper>
            <Block>
              {
                tickets.map(item => (
                  <FlightComponent ticket={item} />
                ))
              }
             </Block>
          </BlockWrapper>
      </FilterFlightWrapper>
   );
 }
}

export default TicketsPage;