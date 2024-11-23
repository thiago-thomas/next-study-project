import 'server-only'
 
const dictionaries = {
  en: () => import('@/app/messages/en.json').then((module) => module.default),
  pt: () => import('@/app/messages/pt.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()