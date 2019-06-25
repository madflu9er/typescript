import { daysOfWeekArray, monthOfYearArray } from "./config";

export  default function formDateString(date: string): string {

//date comes from server as "12.05.18 - dd.mm.yy"
	let dateElements: string[] = date.split(".");
	dateElements[2] = "20" + dateElements[2];
	dateElements = dateElements.reverse();
	//convert data to string formatted as "2018.05.12 - yyyy,mm,dd" to paste as parameters for function
	date = dateElements.toString().replace(".", ",");

	let fullDate: Date = new Date(date);
	let dayOfDate: number = fullDate.getDate();
	let monthOfDate: string = monthOfYearArray[fullDate.getMonth()];
	let yearOfDate: number = fullDate.getFullYear();
	let dayOfWeek: string = daysOfWeekArray[fullDate.getDay()];

	return `${dayOfDate} ${monthOfDate} ${yearOfDate}, ${dayOfWeek}`;
}