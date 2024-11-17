export default async function Id({params}: {params: Promise<{ id: string }>}) {
  const id = (await params).id
  return (
    <div className="p-20 bg-teal-300 text-white">
      <h1 className="text-4xl font-bold mb-6">Id #{id}</h1>
    </div>
  );
}
