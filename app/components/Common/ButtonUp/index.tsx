"use client";
import React, { useEffect, useState } from "react";

const Index = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.pageYOffset > 300);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<div className="position-fixed bottom-0 end-0 mb-4 me-4" style={{ zIndex: 999 }}>
			<button
				id="button-up"
				type="button"
				className={visible ? "show" : ""}
				onClick={handleClick}
				aria-label="Volver arriba"
			>
				<span>↑</span>
			</button>
		</div>
	);
};

export default Index;