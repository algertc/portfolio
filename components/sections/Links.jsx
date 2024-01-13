import links from '../../data/links.json'
import LinkCard from '../common/LinkCard'
import Animate from '../common/Animate'

export default function Links() {
    return (
        <section className="py-20 md:py-24  xl:ml-[2rem] xxl:ml-[2rem] xl:pt-40 xxl:pt-40 xxl:pb-40">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-[9rem] xxl:gap-[9rem] xl:py-[2rem] xl:px-[6rem]">
                    {links &&
                        links.map((link, i) => (
                            <Animate key={i} animateDelay={i * 100}>
                                <LinkCard
                                    link={link.link}
                                    title={link.title}
                                    description={link.description}
                                    image={{ src: link.image.src, alt: link.image.alt }}
                                />
                            </Animate>
                        ))}
                </div>
            </div>
        </section>
    )
}
