import introduction from '../../../data/introduction.json'

export default function Hero() {
    return (
        <section className="py-8 md:py-15">
            <div className="container grid md:grid-cols-2 items-center gap-16 lg:gap-32">
                <div>
                    <img
                        src={introduction.avatar.src}
                        alt={introduction.avatar.alt}
                        className="max-w-[270px] md:max-w-[320px] lg:max-w-[548px] mx-auto md:mx-0 lg:mx-auto"
                    />
                </div>
                <div>
                    <h1 className="text-4xl text-center lg:text-left font-extrabold mb-8 lg:mb-16">
                        Hi 👋 I'm{'  '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-300 to-magenta-800">
                            Charlie
                        </span>
                    </h1>
                    <p className="max-w-[270px] lg:max-w-[448px] mr-16 text-xl lg:text-2xl text-justify font-bold leading-8">
                        {introduction.description}
                    </p>
                </div>
            </div>
        </section>
    )
}
