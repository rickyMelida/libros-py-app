"use client";

import { use } from "react";
import BookDetail from '@/components/BookDetail';

const BookDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return <BookDetail />;
};

export default BookDetailPage;
