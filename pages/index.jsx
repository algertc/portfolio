import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import seo from '../data/seo.config.json'

import Bar from '../components/sections/Bar'
import Footer from '../components/sections/Footer'
import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Publications from '../components/sections/Publications'
import Stats from '../components/sections/Stats'

export default function App() {
    return (
        <>
            <DefaultSeo {...seo.defaultSeo} />
            <SocialProfileJsonLd {...seo.socialProfileJsonLd} />
            <Bar />
            <Header />
            <Hero />
            <Stats />
            <Projects />
            <Publications />
            <Footer />
        </>
    )
}
