import en from '@/messages/en.json'
import fr from '@/messages/fr.json'

export function getMessages(locale: string) {
  return locale === 'fr' ? fr : en
}
