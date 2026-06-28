import { IBookDTOResponse } from "../interfaces/IBookResponse";

export interface BookDetailsProp {
	bookDetail: IBookDTOResponse | null;
	loading: boolean;
}