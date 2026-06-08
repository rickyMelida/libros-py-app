import styles from "./index.module.css";

interface LoadingProps {
	fullScreen?: boolean;
	size?: "sm" | "md" | "lg";
}

const Loading = ({ fullScreen = false, size = "md" }: LoadingProps) => {
	return (
		<div className={`${styles["loading-container"]} ${fullScreen ? styles["full-screen"] : ""}`}>
			<div className={`${styles["spinner"]} ${styles[size]}`}></div>
		</div>
	);
};

export default Loading;