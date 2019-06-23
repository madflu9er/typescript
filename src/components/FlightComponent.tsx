import * as React from "react";
import styled from "styled-components";
import Ticket from "../types/Ticket";

interface IProps {
    ticket: Ticket
}

const Block: any = styled.div`
    width: 70%;
    box-sizing: border-box;
    height: 30%;
    background: red;
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

