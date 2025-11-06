import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { IntlProvider } from 'react-intl'
import en from '../locales/en.json'
import nl from '../locales/nl.json'
import ar from '../locales/ar.json'
import { useEffect, useState } from 'react'
const messages: Record<string, any> = { en, nl, ar }
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [locale, setLocale] = useState('en')
  useEffect(() => { const navLocale = typeof navigator !== 'undefined' ? navigator.language?.split('-')[0] : 'en' setLocale(messages[navLocale] ? navLocale : 'en') if (navLocale === 'ar') document.documentElement.dir = 'rtl' else document.documentElement.dir = 'ltr' }, [])
  return (
    <SessionProvider session={session}>
      <IntlProvider locale={locale} messages={messages[locale] || messages.en}>
        <Component {...pageProps} />
      </IntlProvider>
    </SessionProvider>
  )
}