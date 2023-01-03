import publications from '../../data/publications.json'
import Animate from '../common/Animate'
import Card from '../common/Card'
import Title from '../common/Title'

export default function Publications() {
    return (
        <section className="py-10 xl:py-24 md:py-15 mx-0 xl:ml-0">
            <div className="container">
                <Title as="h2">Publications</Title>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-0">
                    {publications.map((publication, i) => (
                        <Animate key={i} animateDelay={i * 100}>
                            <Card
                                key={i}
                                link={publication.link}
                                title={publication.title}
                                description={publication.description}
                                image={{ src: publication.image.src, alt: publication.image.alt }}
                            />
                        </Animate>
                    ))}
                </div>
            </div>
        </section>
    )
}
