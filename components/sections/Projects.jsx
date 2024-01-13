import projects from '../../data/projects.json'
import ProjectCard from '../common/ProjectCard'
import Animate from '../common/Animate'
import Title from '../common/Title'

export default function Projects() {
    return (
        <section className="py-20 md:py-24 xl:ml-[2rem] xxl:ml-[2rem] xl:pt-40 xxl:pt-40 xxl:pb-40 mx-auto">
            {/* Extend container width for lg screen */}
            <div className="container w-full lg:max-w-[80rem] xl:container xxl:container xl:max-w-[140rem]">
                <Title as="h2">Featured Fun Stuff</Title>
                {/* Extend the grid's width with negative margins on lg screen */}
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-[9rem] xxl:gap-[9rem] xxl:pt-20 xl:py-[2rem] xl:pt-10 mx-0 xl:mx-14">
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

