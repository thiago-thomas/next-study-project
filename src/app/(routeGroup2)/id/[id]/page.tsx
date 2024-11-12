"use client"

import { useParams } from "next/navigation";

export default function Id() {
  const params = useParams();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Id #{params.id}</h1>
    </div>
  );
}
