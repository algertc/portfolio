import '../styles/index.css'
import '../styles/404.css'
import { DefaultSeo } from 'next-seo'
import seo from '../data/seo.config.json'

export default function App({ Component, pageProps }) {
    return <>
    <DefaultSeo {...seo.defaultSeo} />
    <Component {...pageProps} />

    </>
}





