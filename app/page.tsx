'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import book1 from "~/public/img/books/libro1.jpg";
import book2 from "~/public/img/books/libro2.jpg";
import book3 from "~/public/img/books/libro3.jpg";
import Carousel from "@/components/Common/Carousel";
import Main from "@/components/Main";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/home');
  }, [router]);

  const images = [book1, book2, book3];
  return null
}
