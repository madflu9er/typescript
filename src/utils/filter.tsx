export default function compareTicketsByPrice(itemOne: any, itemTwo: any): number {
	if (itemOne.price < itemTwo.price) {
		return -1;
	}
	if (itemOne.price > itemTwo.price) {
		return 1;
	}
	return 0;
}