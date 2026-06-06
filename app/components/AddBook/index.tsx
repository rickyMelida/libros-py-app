'use client';

import { IFormElement } from "@/models/interfaces/IFormElement";
import { Title } from "./Title";
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import BookFormData from "@/models/interfaces/BookFormData";
import Swal from 'sweetalert2';
import { createBook } from "@/services/bookService";
import axios from "axios";
import Image from 'next/image';


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
};

const Index = () => {
	const formDataElements: IFormElement[] = [
		{
			id: "book-title",
			name: "Titulo del Libro",
			placeholder: "Ej. Romeo y Julieta",
			type: "text",
		},
		{
			id: "book-author",
			name: "Autor del Libro",
			placeholder: "Ej. William Shakespeare",
			type: "text",
		},
		{
			id: "book-pages-number",
			name: "Numero de Páginas",
			placeholder: "Ej. 162",
			type: "number",
		},
		{
			id: "book-price",
			name: "Precio",
			placeholder: "Sin punto. Ej.65000",
			type: "number",
		},
		{
			id: "state-bok",
			name: "Estado del Libro:",
			type: "select",
			data: ["Nuevo", "Usado", "Semi Nuevo"],
		},
		{
			id: "state-bok",
			name: "Lo quiero..",
			type: "select",
			data: ["Vender", "Permutar", "Cambiar"],
		},
		{
			id: "mensaje",
			name: "Descripción",
			type: "textarea",
			placeholder: "Ej. El libro tiene pequeños rasguños en la parte de atrás.",
		},
		{
			id: "customFile",
			type: "file",
		},
	];
	const [previews, setPreviews] = useState<PreviewFile[]>([]);
	const [form, setForm] = useState<BookFormData>(INITIAL_FORM);
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

	function handleChange(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: ["user", "price", "state", "transactionType"].includes(name)
				? Number(value)
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

			const filesUpload = Array.from(e.target.files ?? []);
			setForm((prev) => ({ ...prev, images: files }));
		},
		[]
	);

	const removeImage = (index: number) => {
		console.log("Removing image at index:", index);
		setForm(prev => {
			const newImages = prev.images.filter((_, i) => i !== index);
			return { ...prev, images: newImages };
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
						<div className="form-group my-4">
							<label htmlFor="book-title">Titulo del Libro</label>
							<input
								name="title"
								placeholder="Título"
								className="form-control"
								id="book-title"
								value={form.title}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group my-4">
							<label htmlFor="book-author">Autor del Libro</label>
							<input
								name="author"
								placeholder="Autor"
								className="form-control"
								id="book-author"
								value={form.author}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group my-4">
							<label htmlFor="book-price">Precio</label>
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
						</div>
						<div className="form-group my-4">
							<label htmlFor="book-year">Año</label>
							<input
								name="year"
								placeholder="Año (ej. 2023)"
								className="form-control"
								id="book-year"
								value={form.year}
								onChange={handleChange}
							/>

						</div>
						<div className="form-group my-4">
							<label htmlFor="book-state">Estado del Libro</label>
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
						</div>
						<div className="form-group my-4">
							<label htmlFor="book-transactionType">Tipo de Transacción</label>
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
						</div>
						<div className="form-group my-4">
							<label htmlFor="book-description">Descripción</label>
							<textarea
								name="description"
								placeholder="Descripción"
								className="form-control"
								id="book-description"
								value={form.description}
								onChange={handleChange}
								rows={3}
							/>
						</div>
						<div className="form-group my-4">
							<label htmlFor="book-otherDetail">Otros Detalles</label>
							<textarea
								name="otherDetail"
								placeholder="Otros detalles"
								className="form-control"
								id="book-otherDetail"
								value={form.otherDetail}
								onChange={handleChange}
								rows={2}
							/>
						</div>
						<div className="form-group my-4">
							<div className="custom-file">

								{/* Imágenes: multiple permite seleccionar varios archivos */}
								<input
									type="file"
									accept="image/*"
									className="custom-file-input"
									id="customFile"
									multiple
									onChange={handleChangeImage}
								/>
								{previews.length > 0 && (
									<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
										{previews.map((preview, index) => (
											<div key={index} style={{ position: 'relative' }}>
												<Image
													src={preview.url}
													alt={preview.name}
													width={80}
													height={80}
													style={{ objectFit: 'cover', borderRadius: '6px' }}
												/>
												<button className="remove-btn" onClick={() => removeImage(index)}>✕</button>
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
						</div>
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
