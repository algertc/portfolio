import introduction from '../../../data/introduction.json'

export default function Hero() {
    return (
        <section className="py-10 md:py-15">
            <div className="container grid md:grid-cols-2 items-center gap-16 lg:gap-32">
                <div>
                    <img
                        src={introduction.avatar.src}
                        alt={introduction.avatar.alt}
                        className="max-w-[270px] md:max-w-[320px] lg:max-w-[560px] mx-auto md:mx-0 lg:mx-auto"
                    />
                </div>
                <div>
                    <h1 className="text-5xl text-center lg:text-left font-extrabold mb-8 lg:mb-12 pt-9">
                        Hi 👋 I'm{'  '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-300 to-magenta-800">
                            Charlie
                        </span>
                    </h1>
                    <p className="max-w-[270px] lg:max-w-[448px] ml-0.5 mr-16 text-xl lg:text-3xl font-mono leading-24">
                        {introduction.description}
                    </p>
                </div>
            </div>
        </section>
    )
}
