import Ticket from "../types/Ticket";

export function compareTicketsByPrice(itemOne: any, itemTwo: any): number {
	if (itemOne.price < itemTwo.price) {
		return -1;
	}
	if (itemOne.price > itemTwo.price) {
		return 1;
	}
	return 0;
}

export function filterFlightsByStops(filtersArray: number[], ticketsArray: Ticket[]): Ticket[] {
	if(!filtersArray.length) return [];

	 return ticketsArray.filter(ticket => (filtersArray.includes(ticket.stops)));
}