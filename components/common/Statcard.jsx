import Image from 'next/image'

export default function Statcard({ icon, description, sub, ...props }) {
    return (
        <div className="rounded-lg overflow-hidden" {...props}>
            <div className="text-center pt-5">
                <div className="inline-block transition-transform duration-200 hover:scale-125 xl:hover:scale-110 xxl:hover:scale-110">
                    <Image src={icon} alt={sub} width={90} height={90} quality={100} />
                </div>
            </div>
            <div className="md:p-3 lg:p-3 pt-3 xxl:pt-8 text-center mb-12 xl:mb-6 xxl:mb-4 bg-black-100">
                <h1 className="text-2xl md:text-3xl lg:text-3xl xxl:text-4xl xxl:mb-[0.2rem] w-full text-transparent bg-clip-text font-extrabold bg-m2-200">
                    {description}
                </h1>
                <p className="font-display text-sm xxl:text-[1.2rem] w-full text-center">{sub}</p>
            </div>
        </div>
    )
}
