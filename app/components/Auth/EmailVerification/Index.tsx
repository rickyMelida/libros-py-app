'use client';

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function EmailVerification() {
	const searchParams = useSearchParams();
	const email = searchParams?.get("email") ?? "";
	const [resendState, setResendState] = useState<"idle" | "loading" | "sent">("idle");
	const [countdown, setCountdown] = useState(0);
	const [visible, setVisible] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const t = setTimeout(() => setVisible(true), 50);
		return () => clearTimeout(t);
	}, []);

	useEffect(() => {
		if (countdown <= 0) return;
		const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
		return () => clearTimeout(t);
	}, [countdown]);

	const handleResend = async () => {
		if (resendState !== "idle" || countdown > 0) return;
		setResendState("loading");
		try {
			console.log("Simulando reenvío de correo...");
			//await onResend?.();
		} catch {
			// silent
		} finally {
			setResendState("sent");
			setCountdown(60);
			setTimeout(() => setResendState("idle"), 3000);
		}
	};

	return (
		<div className="auth-page">
			<div style={{ ...styles.card, ...(visible ? styles.cardVisible : {}) }}>

				{/* Icon */}
				<div style={styles.iconWrap}>
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
						style={{ color: "#16a34a" }}>
						<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" />
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						<path d="m16 19 2 2 4-4" />
					</svg>
				</div>

				{/* Heading */}
				<h1 style={styles.heading}>¡Registro exitoso!</h1>
				<p style={styles.subtext}>
					Tu cuenta ha sido creada. Te enviamos un enlace de verificación a:
				</p>

				{/* Email pill */}
				<div style={styles.emailPill}>
					<svg width="15" height="15" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
						style={{ flexShrink: 0, color: "#6b7280" }}>
						<rect width="20" height="16" x="2" y="4" rx="2" />
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
					</svg>
					<span style={styles.emailText}>{email}</span>
				</div>

				{/* Steps */}
				<div style={styles.steps}>
					{[
						{ icon: "📬", text: "Revisa tu bandeja de entrada" },
						{ icon: "🔗", text: "Haz clic en el enlace de confirmación" },
						{ icon: "🚀", text: "¡Listo para comenzar!" },
					].map((step, i) => (
						<div key={i} style={styles.step}>
							<span style={styles.stepNum}>{i + 1}</span>
							<span style={styles.stepText}>{step.text}</span>
						</div>
					))}
				</div>

				<p style={styles.spamNote}>
					¿No lo ves? Revisa la carpeta de <strong>spam</strong> o correo no deseado.
				</p>

				{/* Actions */}
				<div style={styles.actions}>
					<button
						onClick={handleResend}
						disabled={resendState === "loading" || countdown > 0}
						style={{
							...styles.btnPrimary,
							...(resendState === "sent" ? styles.btnSuccess : {}),
							...(countdown > 0 && resendState === "idle" ? styles.btnDisabled : {}),
						}}
					>
						{resendState === "loading" && (
							<span style={styles.spinner} />
						)}
						{resendState === "sent"
							? "✓ Correo reenviado"
							: countdown > 0
								? `Reenviar en ${countdown}s`
								: "Reenviar correo de verificación"}
					</button>

					<button onClick={() => router.push("/login")} style={styles.btnGhost}>
						← Volver al inicio de sesión
					</button>
				</div>

			</div>

			<style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(22,163,74,0.3); }
          70% { box-shadow: 0 0 0 10px rgba(22,163,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
        }
      `}</style>
		</div>
	);
}

const styles: Record<string, React.CSSProperties> = {
	page: {
		minHeight: "100vh",
		background: "#f9fafb",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "2rem 1rem",
		fontFamily: "'Georgia', serif",
	},
	card: {
		background: "#ffffff",
		borderRadius: "16px",
		border: "1px solid #e5e7eb",
		padding: "2.5rem 2rem",
		maxWidth: "420px",
		width: "100%",
		textAlign: "center",
		opacity: 0,
		transform: "translateY(16px)",
		transition: "opacity 0.45s ease, transform 0.45s ease",
	},
	cardVisible: {
		opacity: 1,
		transform: "translateY(0)",
	},
	iconWrap: {
		width: "72px",
		height: "72px",
		borderRadius: "50%",
		background: "#dcfce7",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: "0 auto 1.5rem",
		animation: "pulse-ring 2s ease-out 0.5s",
	},
	heading: {
		fontSize: "22px",
		fontWeight: 600,
		color: "#111827",
		margin: "0 0 0.5rem",
	},
	subtext: {
		fontSize: "14px",
		color: "#6b7280",
		margin: "0 0 1.25rem",
		lineHeight: 1.6,
	},
	emailPill: {
		display: "inline-flex",
		alignItems: "center",
		gap: "8px",
		background: "#f3f4f6",
		border: "1px solid #e5e7eb",
		borderRadius: "999px",
		padding: "6px 14px",
		margin: "0 0 1.75rem",
	},
	emailText: {
		fontSize: "14px",
		fontWeight: 500,
		color: "#374151",
		fontFamily: "monospace",
	},
	steps: {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		margin: "0 0 1.25rem",
		textAlign: "left",
	},
	step: {
		display: "flex",
		alignItems: "center",
		gap: "12px",
		padding: "10px 12px",
		background: "#f9fafb",
		borderRadius: "10px",
		border: "1px solid #f3f4f6",
	},
	stepNum: {
		width: "24px",
		height: "24px",
		borderRadius: "50%",
		background: "#e5e7eb",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "12px",
		fontWeight: 600,
		color: "#374151",
		flexShrink: 0,
	},
	stepText: {
		fontSize: "14px",
		color: "#374151",
	},
	spamNote: {
		fontSize: "12px",
		color: "#9ca3af",
		margin: "0 0 1.75rem",
		lineHeight: 1.5,
	},
	actions: {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		borderTop: "1px solid #f3f4f6",
		paddingTop: "1.25rem",
	},
	btnPrimary: {
		width: "100%",
		padding: "11px",
		fontSize: "14px",
		fontWeight: 500,
		background: "#111827",
		color: "#ffffff",
		border: "none",
		borderRadius: "10px",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "8px",
		transition: "background 0.2s, transform 0.1s",
	},
	btnSuccess: {
		background: "#16a34a",
	},
	btnDisabled: {
		background: "#9ca3af",
		cursor: "not-allowed",
	},
	btnGhost: {
		width: "100%",
		padding: "10px",
		fontSize: "14px",
		color: "#6b7280",
		background: "transparent",
		border: "1px solid #e5e7eb",
		borderRadius: "10px",
		cursor: "pointer",
		transition: "background 0.15s",
	},
	spinner: {
		display: "inline-block",
		width: "14px",
		height: "14px",
		border: "2px solid rgba(255,255,255,0.3)",
		borderTopColor: "#ffffff",
		borderRadius: "50%",
		animation: "spin 0.7s linear infinite",
	},
};