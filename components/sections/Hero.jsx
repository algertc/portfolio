import introduction from '../../data/introduction.json'
import Typical from 'react-typical'

export default function Hero() {
    return (
        <section className="py-5 lg:py-6 md:py-15 xl:py-0 lg:pr-[3.2rem] xl:pb-24 xl:pr-[2rem] xxl:pr-[14rem]">
            <div className="container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center gap-4 md:gap-32 lg:gap-24 xl:gap-0 xxl:gap-[13rem]">
                <div>
                    <img
                        src={introduction.avatar.src}
                        alt={introduction.avatar.alt}
                        className="sm:max-w-[320px] md:max-w-[450px] lg:max-w-[560px] xl:max-w-[62rem] xxl:max-w-[80rem] xxl:pl-24 mx-auto md:mx-0 lg:mx-auto xl:mx-10"
                    />
                </div>
                <div>
                    <h1 className="lg:max-w-none lg:text-[3.5rem] xl:text-[6.2rem] xxl:text-[6.9rem] lg:leading-60 md:text-5xl text-[2.7rem] text-center md:text-left lg:text-left font-extrabold mb-4 md:mb-8 lg:pl-[-10px] lg:mb-[4rem] xxl:pt-24 xl:mb-[5.5rem] xxl:mb-[8rem] sm:pt-0 md:pt-4 lg:pt-10 xl:pt-24">
                        Hi 👋 I'm{'  '}
                        <Typical
                            steps={['', 1000, 'Charlie', 1000]}
                            loop={2}
                            wrapper="span"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-m2-200 to-m2-200"
                        />
                    </h1>

                    <p className="max-w-none md:max-w-[350px] mx-5 lg:max-w-[560px] xl:max-w-[48rem] xxl:max-w-[51rem] md:ml-0.5 xl:ml-16 xxl:ml-11 lg:ml-2 md:mr-8 lg:mr-5 text-center md:text-left lg:text-left text-xl lg:text-3xl xl:text-[3.5rem] xxl:text-[4.2rem] font-mono font-bold lg:font-extrabold xl:leading-[4.1rem] xxl:leading-[4.4rem] leading-30">
                        {introduction.description}
                    </p>
                </div>
            </div>
        </section>
    )
}
