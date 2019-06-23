import * as React from "react";
import styled from "styled-components";
import FlightComponent from "../components/FlightComponent";
import Ticket from "../types/Ticket";

interface IProps {
    tickets: Ticket[]
}

interface IState {
    data: Ticket[],
}

const Block: any = styled.div`
        width: 80%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
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
        // console.log(tickets);
        return(
             <Block>
                 {
                     tickets.map(item => (
                          <FlightComponent ticket={item} />
                     ))
                 }
             </Block>
     );
 }
}

export default TicketsPage;