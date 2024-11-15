export default async function CatchAllOptional({
  params,
}: {
  params: Promise<{slug?: string[]}>
}) {
  const prms = await params
  if(!prms.slug) {
    return <h1>No params</h1>
  } else {
    return <h1>Params1 = {prms.slug[0]}</h1>;
  }

}
