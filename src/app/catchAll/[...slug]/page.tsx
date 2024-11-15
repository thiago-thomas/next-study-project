export default async function CatchAll({
  params,
}: {
  params: Promise<{slug: string[]}>
}) {
  const prms = await params
  return <h1>Params1 = {prms.slug[0]}</h1>;
}
