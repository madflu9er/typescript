export default function GenerateKey(item: any, objectProperty: string):string {
	return Math.random() + item[objectProperty];
}