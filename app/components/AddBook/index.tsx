'use client';

import { IFormElement } from "@/models/interfaces/IFormElement";
import { Title } from "./Title";
import { Button } from "./Button";
import { v4 as uuid } from "uuid";
import { FormElement } from "./FormElement";
import { ChangeEvent, FormEvent, useState } from "react";
import BookFormData from "@/models/interfaces/BookFormData";
import BookDTOResponse from "@/models/response/BookDTOResponse";
import { createBook } from "@/services/booService";
import axios from "axios";


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

	const [form, setForm] = useState<BookFormData>(INITIAL_FORM);
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<BookDTOResponse | null>(null);
	const [error, setError] = useState<string | null>(null);

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
		setError(null);
		setResult(null);

		try {
			const response = await createBook(form);
			setResult(response);
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				setError(err.response?.data?.message ?? err.message);
			} else {
				setError("Error inesperado");
			}
		} finally {
			setLoading(false);
		}
	}

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
									onChange={handleImages}
								/>
								{form.images.length > 0 && (
									<small style={{ color: "var(--color-text-secondary)" }}>
										{form.images.length} imagen(es) seleccionada(s)
									</small>
								)}
							</div>
						</div>
						<button type="submit" className="btn btn-primary btn-lg btn-block">
							{loading ? "Subiendo…" : "Subir Libro"}
						</button>
					</form>
				</div>
			</div>

			{error && (
				<p style={{ color: "var(--color-text-danger)", marginTop: 16 }}>
					Error: {error}
				</p>
			)}
		</div>
	);
};

export default Index;
