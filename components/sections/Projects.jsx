import projects from '../../data/projects.json'
import ProjectCard from '../common/ProjectCard'
import Animate from '../common/Animate'

export default function Projects() {
    return (
        <section className="py-20 md:py-24 xl:ml-[12rem] xxl:ml-[16rem] xxl:pt-40 xxl:pb-40">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-[9rem] xxl:gap-[9rem]">
                    {projects &&
                        projects.map((project, i) => (
                            <Animate key={i} animateDelay={i * 100}>
                                <ProjectCard
                                    link={project.link}
                                    title={project.title}
                                    description={project.description}
                                    image={{ src: project.image.src, alt: project.image.alt }}
                                />
                            </Animate>
                        ))}
                </div>
            </div>
        </section>
    )
}
