import { BookState } from "@/models/enums/BookState";
import { TransactionType } from "@/models/enums/TransactionType";

export function formatToGuarani(monto: number): string {
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

export function detectMimeType(base64: string): string {
	const signatures: Record<string, string> = {
		"/9j/": "image/jpeg",
		"iVBORw0": "image/png",
		"R0lGOD": "image/gif",
		"UklGRi": "image/webp",
		"Qk": "image/bmp",
		"PHN2Zy": "image/svg+xml",
		"AAABAA": "image/x-icon",
	};

	for (const [signature, mimeType] of Object.entries(signatures)) {
		if (base64.startsWith(signature)) {
			return mimeType;
		}
	}

	return "image/jpeg";
}

export const convertBase64 = (base64Data: string | any) => {
	const mimeType = detectMimeType(base64Data);
	const src = `data:${mimeType};base64,${base64Data}`;

	return src;
}
