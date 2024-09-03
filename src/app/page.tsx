import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/common/header";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <>
    <Header/>
    <Slider />
    </>
  );
}
