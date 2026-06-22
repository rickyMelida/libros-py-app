import { BookState } from "@/models/enums/BookState";
import { TransactionType } from "@/models/enums/TransactionType";

export function formatearGuaranies(monto: number): string {
	const formato = new Intl.NumberFormat('es-PY', {
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
	}).format(monto);

	return `Gs. ${formato}`;
}

export const abbreviateName = (name: string): string => {
	const lastNameFirstLetter = name.split(" ")[1].charAt(0);
	return `${name.split(" ")[0]} ${lastNameFirstLetter}.`;
}

export const getTransactionType = (id: TransactionType): string => {
	const transactions = {
		1: "Comprar",
		2: "Cambiar",
		3: "Obtener"
	}
	return transactions[id];
}

export const getBookState = (id: BookState): string => {
	return BookState[id];
}