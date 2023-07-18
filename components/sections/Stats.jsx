import stats from '../../data/stats.json'
import Animate from '../common/Animate'
import Statcard from '../common/Statcard'
import Title from '../common/Title'

export default function Stats() {
    return (
        <section className="pt-16">
            <div className="container">
                <div className="flex flex-wrap justify-center items-center align-top">
                    {stats.map((stat, i) => (
                        <Animate classNames="w-6/12 lg:w-3/12" key={i} animateDelay={i * 100}>
                            <Statcard
                                key={i}
                                icon={stat.icon}
                                description={stat.description}
                                sub={stat.sub}
                            />
                        </Animate>
                    ))}
                </div>
            </div>
        </section>
    )
}
