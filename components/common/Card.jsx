import Image from 'next/image'

export default function Card({ link, title, description, image, ...props }) {
    return (
        <div
            className="max-w-[330px] md:max-w-none mx-auto rounded-lg overflow-hidden group"
            {...props}
        >
            <div>
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    quality={100}
                    layout="responsive"
                    className="w-full h-full transition-transform duration-150 group-hover:scale-105"
                />
            </div>
            <div className="p-5 bg-gradient-to-r from-magenta-600/80 to-fuchsia-500/100 text-neutral-200">
                <a
                    href={link}
                    target="_blank"
                    className="text-1xl xl:text-2xl xxl:text-3xl font-bold xxl:font-[700] transition-colors group-hover:text-neutral-100"
                >
                    <p className="tracking-tight mb-1">{title}</p>
                </a>
                <p>{description}</p>
            </div>
        </div>
    )
}
