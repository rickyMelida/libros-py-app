interface IBook {
  title: string;
  author: string;
  price: number;
  state: number;
  transactionType: number;
  description: string;
  otherDetail?: string;
  year?: string;
}

export interface IBookDTOResponse extends IBook {
  id: number;
  userName: string;
  images: string[];
}