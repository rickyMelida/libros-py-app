export default interface BookDTOResponse {
	id: number;
	title: string | null;
	author: string | null;
	price: number;
	state: number;
	transactionType: number;
	description: string | null;
	otherDetail: string | null;
	year: string | null;
	userName: string | null;
	images: string[] | null;
}