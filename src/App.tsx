import React from 'react';
import './App.css';
import TicketsPage from "./pages/TicketsPage";
import Ticket from "./types/Ticket";

interface IState {
    tickets: Ticket[]
}

class App extends React.Component<any> {

    public state: IState = {
        tickets: []
    };

    public async fetchAsync (url: string) {
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            tickets: data.tickets,
        });
    }

    public componentDidMount(): void {
        this.fetchAsync("tickets.json");
    }

    render(): React.ReactElement<any | React.JSXElementConstructor<any>>  | null {
    const { tickets } = this.state;

    if(!tickets.length) {
      return  null;
    }
        console.log(tickets);
    return (
        <div className="App">
            <TicketsPage tickets = {tickets} />
        </div>
    );
    }
};

export default App;
