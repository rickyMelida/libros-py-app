'use client';

import { Title } from "./Title";
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import BookFormData from "@/models/interfaces/BookFormData";
import Swal from 'sweetalert2';
import { createBook } from "@/services/bookService";
import styles from './preview.module.css';
import { FormField } from "./FormField";


interface PreviewFile {
	url: string;
	name: string;
	size: number;
}


const INITIAL_FORM: BookFormData = {
	user: 1,
	title: "",
	author: "",
	price: 0,
	state: 1,
	transactionType: 1,
	description: "",
	otherDetail: "",
	year: "",
	images: [],
	principalImage: "",
};

const Index = () => {
	const [previews, setPreviews] = useState<PreviewFile[]>([]);
	const [form, setForm] = useState<BookFormData>(INITIAL_FORM);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [loading, setLoading] = useState(false);
	const [messageResult, setMessageResult] = useState<string | null>(null);

	useEffect(() => {
		if (messageResult) {
			Swal.fire({
				title: '¡Libro creado!',
				text: messageResult,
				icon: 'success',
				confirmButtonText: 'Aceptar'
			}).then(() => {
				resetForm();
			});
		}
	}, [messageResult]);

	// Cleanup: revoke object URLs when previews change or on unmount
	useEffect(() => {
		return () => {
			previews.forEach(p => URL.revokeObjectURL(p.url));
		};
	}, [previews]);

	function handleChange(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: ["user", "price", "state", "transactionType"].includes(name)
				? (name === "price"
					// eliminar ceros a la izquierda para que "05000" pase a "5000" antes de convertir
					? Number(value.replace(/^0+(?=\d)/, ""))
					: Number(value))
				: value,
		}));
	}

	function handleImages(e: ChangeEvent<HTMLInputElement>) {
		const files = Array.from(e.target.files ?? []);
		setForm((prev) => ({ ...prev, images: files }));
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setLoading(true);
		setMessageResult(null);

		try {
			const response = await createBook(form);
			setMessageResult(response);
		} catch (err: any) {
			Swal.fire({
				title: 'Error',
				text: err.message,
				icon: 'error',
				confirmButtonText: 'Aceptar'
			})
		} finally {
			setLoading(false);
		}
	}

	function resetForm() {
		setForm(INITIAL_FORM);
		setPreviews([]);
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	}


	const handleChangeImage = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const files = Array.from(e.target.files ?? []);

			// Liberar URLs anteriores para evitar memory leaks
			setPreviews(prev => {
				prev.forEach(p => URL.revokeObjectURL(p.url));
				return [];
			});

			const newPreviews = files.map(file => ({
				url: URL.createObjectURL(file),
				name: file.name,
				size: file.size,
			}));

			setPreviews(newPreviews);

			setForm((prev) => ({
				...prev,
				images: files,
				principalImage: prev.principalImage || files[0]?.name || "",
			}));
		},
		[]
	);

	const handleSetPrincipal = (index: number) => {
		setForm(prev => {
			const file = prev.images[index];
			return { ...prev, principalImage: file?.name || "" };
		});
	};

	const removeImage = (index: number) => {
		setForm(prev => {
			const newImages = prev.images.filter((_, i) => i !== index);
			let newPrincipal = prev.principalImage;
			const removed = prev.images[index];
			if (removed && removed.name === prev.principalImage) {
				newPrincipal = newImages[0]?.name || "";
			}

			// Sincronizar el input de tipo file para que el navegador muestre
			// la cantidad correcta de archivos seleccionados.
			if (inputRef.current) {
				const dt = new DataTransfer();
				newImages.forEach(f => dt.items.add(f));
				inputRef.current.files = dt.files;
			}

			return { ...prev, images: newImages, principalImage: newPrincipal };
		});

		setPreviews(prev => {
			URL.revokeObjectURL(prev[index].url); // liberar memoria
			return prev.filter((_, i) => i !== index);
		});
	};

	return (
		<div className="container">

			<Title />
			<div className="row mb-5">
				<div className="col-md-6 offset-md-3">
					<form onSubmit={handleSubmit}>
						<FormField
							label="Título del Libro"
							id="book-title"
							popoverTitle="Título del libro"
							popoverContent="Ingresá el título completo tal como aparece en la portada."
							placement="right"
						>
							<input
								name="title"
								placeholder="Título"
								className="form-control"
								id="book-title"
								value={form.title}
								onChange={handleChange}
								required
							/>
						</FormField>

						<FormField
							label="Autor del Libro"
							id="book-author"
							popoverTitle="Autor del libro"
							popoverContent="Ingresá el nombre completo del autor."
							placement="right"
						>
							<input
								name="author"
								placeholder="Autor"
								className="form-control"
								id="book-author"
								value={form.author}
								onChange={handleChange}
								required
							/>
						</FormField>

						<FormField
							label="Precio"
							id="book-price"
							popoverTitle="Precio del libro"
							popoverContent="Ingresá el precio del libro."
							placement="right"
						>
							
							<input
								name="price"
								type="number"
								placeholder="Precio"
								className="form-control"
								id="book-price"
								value={form.price}
								onChange={handleChange}
								required
							/>
						</FormField>

						<FormField
							label="Año"
							id="book-year"
							popoverTitle="Año del libro"
							popoverContent="Ingresá el año de publicación del libro."
							placement="right"
						>
							<input
								name="year"
								placeholder="Año (ej. 2023)"
								className="form-control"
								id="book-year"
								value={form.year}
								onChange={handleChange}
							/>
						</FormField>

						<FormField
							label="Estado del Libro"
							id="book-state"
							popoverTitle="Estado del libro"
							popoverContent="Ingresá el estado del libro."
							placement="right"
						>
							<select
								name="state"
								className="form-control"
								id="book-state"
								value={form.state}
								onChange={handleChange}
							>
								<option value={1}>Nuevo</option>
								<option value={2}>Usado - Buen estado</option>
								<option value={3}>Usado - Aceptable</option>
							</select>
						</FormField>

						<FormField
							label="Tipo de Transacción"
							id="book-transactionType"
							popoverTitle="Tipo de transacción"
							popoverContent="Ingresá el tipo de transacción."
							placement="right"
						>
							<select
								name="transactionType"
								className="form-control"
								id="book-transactionType"
								value={form.transactionType}
								onChange={handleChange}
							>
								<option value={1}>Venta</option>
								<option value={2}>Intercambio</option>
								<option value={3}>Donación</option>
							</select>
						</FormField>

						<FormField
							label="Descripción"
							id="book-description"
							popoverTitle="Descripción del libro"
							popoverContent="Ingresá una descripción detallada del libro."
							placement="right"
						>
							<textarea
								name="description"
								placeholder="Descripción"
								className="form-control"
								id="book-description"
								value={form.description}
								onChange={handleChange}
								rows={3}
							/>
						</FormField>

						<FormField
							label="Otros detalles"
							id="book-otherDetail"
							popoverTitle="Otros detalles"
							popoverContent="Ingresá otros detalles del libro."
							placement="right"
						>
							<textarea
								name="otherDetail"
								placeholder="Otros detalles"
								className="form-control"
								id="book-otherDetail"
								value={form.otherDetail}
								onChange={handleChange}
								rows={2}
							/>
						</FormField>

						<FormField
							label="Imagenes del Libro"
							id="book-images"
							popoverTitle="Imagenes del libro"
							popoverContent="Si selecciona mas de una imagen, designe una como principal a mostrar."
							placement="right"
						>
							<div className="custom-file">

								{/* Imágenes: multiple permite seleccionar varios archivos */}
								<input
									type="file"
									accept="image/*"
									className="custom-file-input"
									id="customFile"
									ref={inputRef}
									multiple
									onChange={handleChangeImage}
								/>
								{previews.length > 0 && (
									<div className={styles.previewGrid}>
										{previews.map((preview, index) => (
											<div key={index} className={styles.imageCard}>
												<div className={`${styles.mainBadge} ${form.principalImage === preview.name ? styles.active : ''}`}>
													⭐ Principal
												</div>

												<img
													src={preview.url}
													alt={preview.name}
													style={{ width: '100%', height: 130, objectFit: 'cover' }}
												/>

												<div className={styles.imageInfo}>
													<label>
														<input
															type="radio"
															name={`mainImage`}
															value={index}
															checked={form.principalImage === preview.name}
															onChange={() => handleSetPrincipal(index)}
														/>
														Principal
													</label>

													<div style={{ marginTop: 8 }}>
														<button type="button" className={styles.removeBtn} onClick={() => removeImage(index)}>✕</button>
													</div>
												</div>
											</div>
										))}
									</div>
								)}
								{form.images.length > 0 && (
									<small style={{ color: "var(--color-text-secondary)" }}>
										{form.images.length} imagen(es) seleccionada(s)
									</small>
								)}
							</div>
						</FormField>
						<button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>
							{loading ? "Subiendo…" : "Subir Libro"}
						</button>
					</form>
				</div>
			</div>

		</div>
	);
};

export default Index;
