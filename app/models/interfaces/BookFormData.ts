export default interface BookFormData {
	user: number;
	title: string;
	author: string;
	price: number;
	state: number;
	transactionType: number;
	description: string;
	otherDetail: string;
	year: string;
	images: File[];
	principalImage: string;
}