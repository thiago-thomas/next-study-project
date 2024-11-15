export default async function Date({
  params,
}: {
  params: Promise<{ month: string, year: string }>
}) {
  const month = (await params).month
  const year = (await params).year
  return <h1>Month: {month} and Year: {year}</h1>
}