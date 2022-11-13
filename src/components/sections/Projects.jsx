import projects from '../../../data/projects.json'
import Animate from '../common/Animate'
import Card from '../common/Card'
import Title from '../common/Title'

export default function Projects() {
    return (
        <section className="py-20 md:py-24">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <Animate key={i} animateDelay={i * 100}>
                            <Card
                                link={project.link}
                                title={project.title}
                                image={{ src: project.image.src, alt: project.image.alt }}
                            />
                        </Animate>
                    ))}
                </div>
            </div>
        </section>
    )
}
