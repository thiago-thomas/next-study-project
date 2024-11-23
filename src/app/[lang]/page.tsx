import { getDictionary } from './dictionaries.js'

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return <h1>{dict.next.hello}</h1>;
}