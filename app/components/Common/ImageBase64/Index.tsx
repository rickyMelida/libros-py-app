import Image from "next/image";
import styles from "./index.module.css";

function detectMimeType(base64: string): string {
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

interface Props {
	base64Data: string; // sin el prefijo "data:..."
	height: number;
	alt: string;
}

export default function Base64Image({ base64Data, height, alt }: Props) {
	const mimeType = detectMimeType(base64Data);
	const src = `data:${mimeType};base64,${base64Data}`;

	return (
		<Image
			src={src}
			height={height}
			width={height * 0.75} // Asumiendo una relación de aspecto de 4:3
			alt={alt}
			className={styles["swiper-image"]}
			
		/>
	);
}