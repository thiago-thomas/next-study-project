import Image from "next/image";

import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Hello next page',
}

function getText01() {
  return new Promise<string>((res, rej) => {
    setTimeout(() => {
      res('Texto carregado depois de 10 segundos')
    }, 3000)
  })
}

function getText02() {
  return new Promise<string>((res, rej) => {
    setTimeout(() => {
      res('Texto carregado depois de 20 segundos')
    }, 3000)
  })
}

export default async function Home() {
  /*
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1 className="text-4xl font-bold mb-6">Hello, Next.js!</h1>
      </main>
    </div>
  );
  
  const res = await fetch('https://...');
  const data = await res.json();

  if(!res.ok) {
    return 'Ocorreu um erro...'
  }
  */

  redirect('/dashboard')

  
  return (
    <div className="mt-4">
      <h2>Pagina lenta</h2>
    </div>
  )
}
