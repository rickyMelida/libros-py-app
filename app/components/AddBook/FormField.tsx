import { FormFieldProps } from "@/models/propsInterfaces/FormFieldProps";
import { InfoPopoverProps } from "@/models/propsInterfaces/InfoPopoverProps";
import { useState, useRef, useEffect } from "react";

function InfoPopover({ title, content, placement = "right" }: InfoPopoverProps) {
	const [visible, setVisible] = useState(false);
	const btnRef = useRef<HTMLButtonElement>(null);
	const popRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: any) {
			if (
				popRef.current &&
				!popRef.current.contains(e.target) &&
				!btnRef.current?.contains(e.target)
			) {
				setVisible(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const placements = {
		right: {
			left: "calc(100% + 10px)",
			top: "50%",
			transform: "translateY(-50%)",
		},
		top: {
			bottom: "calc(100% + 10px)",
			left: "50%",
			transform: "translateX(-50%)",
		},
		bottom: {
			top: "calc(100% + 10px)",
			left: "50%",
			transform: "translateX(-50%)",
		},
		left: {
			right: "calc(100% + 10px)",
			top: "50%",
			transform: "translateY(-50%)",
		},
	};

	const arrowStyles = {
		right: {
			left: -6,
			top: "50%",
			transform: "translateY(-50%) rotate(45deg)",
			borderLeft: "6px solid #e2e8f0",
			borderBottom: "6px solid #e2e8f0",
			borderRight: "none",
			borderTop: "none",
		},
		top: {
			bottom: -6,
			left: "50%",
			transform: "translateX(-50%) rotate(45deg)",
			borderRight: "6px solid #e2e8f0",
			borderBottom: "6px solid #e2e8f0",
			borderLeft: "none",
			borderTop: "none",
		},
		bottom: {
			top: -6,
			left: "50%",
			transform: "translateX(-50%) rotate(45deg)",
			borderLeft: "6px solid #e2e8f0",
			borderTop: "6px solid #e2e8f0",
			borderRight: "none",
			borderBottom: "none",
		},
		left: {
			right: -6,
			top: "50%",
			transform: "translateY(-50%) rotate(45deg)",
			borderRight: "6px solid #e2e8f0",
			borderTop: "6px solid #e2e8f0",
			borderLeft: "none",
			borderBottom: "none",
		},
	};

	return (
		<span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
			<button
				ref={btnRef}
				type="button"
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				onFocus={() => setVisible(true)}
				onBlur={() => setVisible(false)}
				aria-label={`Información: ${title}`}
				style={{
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: 18,
					height: 18,
					borderRadius: "50%",
					background: visible ? "#475569" : "#94a3b8",
					color: "#fff",
					fontSize: 11,
					fontWeight: 700,
					border: "none",
					cursor: "pointer",
					marginLeft: 6,
					padding: 0,
					lineHeight: 1,
					transition: "background 0.15s",
					flexShrink: 0,
				}}
			>
				i
			</button>

			{visible && (
				<div
					ref={popRef}
					role="tooltip"
					style={{
						position: "absolute",
						zIndex: 100,
						width: 240,
						background: "#fff",
						border: "1px solid #e2e8f0",
						borderRadius: 8,
						boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
						padding: "10px 14px",
						...placements[placement],
					}}
				>
					<div
						style={{
							position: "absolute",
							width: 10,
							height: 10,
							background: "#fff",
							...arrowStyles[placement],
						}}
					/>
					{title && (
						<p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: 13, color: "#1e293b" }}>
							{title}
						</p>
					)}
					<p style={{ margin: 0, fontSize: 13, color: "#475569", lineHeight: 1.5 }}>
						{content}
					</p>
				</div>
			)}
		</span>
	);
}

export function FormField({
	label,
	id,
	popoverTitle,
	popoverContent,
	placement = "right",
	children,
}: FormFieldProps) {
	return (
		<div style={{ marginBottom: 20 }}>
			<label
				style={{
					display: "flex",
					alignItems: "center",
					fontSize: 14,
					fontWeight: 500,
					color: "#1e293b",
					marginBottom: 6,
				}}
			>
				{label}
				<InfoPopover title={popoverTitle} content={popoverContent} placement={placement} />
			</label>
			{children}
		</div>
	);
}