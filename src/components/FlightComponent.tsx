import * as React from "react";
import styled from "styled-components";
import Ticket from "../types/Ticket";

interface IProps {
    ticket: Ticket
}

const Block: any = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 250px;
  margin: 10px 0;
  background: #FFFFFF;
  box-shadow: 0 1px 6px 0px #b6b2b2
  border-radius: 7px;
`;

class FlightComponent extends React.Component<IProps> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
   const { ticket } = this.props;
    return(
        <Block>
          {ticket.origin}
        </Block>
    )
  }
}

export default FlightComponent

