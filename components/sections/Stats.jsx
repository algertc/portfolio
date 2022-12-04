import stats from '../../data/stats.json'
import Animate from '../common/Animate'
import Statcard from '../common/Statcard'
import Title from '../common/Title'

export default function Stats() {
    return (
        <section className="px-10 xxl:pt-[3rem] xl:px-[12rem] xl:pb-36 xl:pt-20 xl:scale-[1.2] xxl:max-w-[140rem] xxl:ml-[9.5rem] xxl:mb-40">
            <div className="container">
                <Title as="h3"></Title>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-8 xxl:gap-0 xxl:grid-cols-4 flex justify-center items-center">
                    {stats.map((stat, i) => (
                        <Animate key={i} animateDelay={i * 100}>
                            <Statcard
                                key={i}
                                icon={stat.icon}
                                description={stat.description}
                                sub={stat.sub}
                            />
                        </Animate>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-2 gap-8 xxl:gap-0 xxl:max-w-[87rem] xxl:ml-[23rem] flex justify-center items-center lg:px-40">
                    <Animate animateDelay={100}>
                        <Statcard
                            icon="fcc2.png"
                            description="Technician"
                            sub="FCC"
                            className="text-1xl"
                        />
                    </Animate>
                    <Animate animateDelay={200}>
                        <Statcard icon="ccna.png" description="Associate" sub="In Progress" />
                    </Animate>
                </div>
            </div>
        </section>
    )
}
