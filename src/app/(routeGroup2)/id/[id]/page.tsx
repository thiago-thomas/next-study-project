export default async function Id({params}: {params: Promise<{ id: string }>}) {
  const id = (await params).id
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Id #{id}</h1>
    </div>
  );
}
