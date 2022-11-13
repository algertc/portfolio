export default function Card({ link, title, description, image, ...props }) {
    return (
        <div className="max-w-[330px] md:max-w-none mx-auto rounded-lg overflow-hidden" {...props}>
            <div className="overflow-hidden">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full transition-transform duration-150 hover:scale-110"
                />
            </div>
            <div className="p-5 bg-gradient-to-r from-magenta-600/80 to-fuchsia-500/100 text-neutral-300">
                <a
                    href={link}
                    className="text-1xl font-bold transition-colors hover:text-white"
                >
                    <p className="tracking-tight mb-1">{title}</p>
                </a>
                <p>{description}</p>
            </div>
        </div>
    )
}
