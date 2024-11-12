"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Faz o log do erro para um serviço de reporte de erros
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Alguma coisa deu erro</h2>
      <button
        type="button"
        onClick={
          // Tenta recuperar tentando re-renrizando o segmento
          () => reset()
        }
      >
        Tentar novamente
      </button>
    </div>
  );
}
