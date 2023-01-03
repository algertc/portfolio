import Image from 'next/image'

export default function Card({ link, title, description, image }) {
    return (
        <a
            href={link}
            target="_blank"
            className="transform transition duration-500 hover:scale-105"
        >
            <div className="group max-w-sm rounded-lg overflow-hidden shadow-lg hover:bg-gradient-to-r from-rose-400 via-m2-200 to-indigo-500 animate-gradient-x p-2 cursor-pointer scale-101 xl:scale-[1.5] xxl:scale-[1.5] project-card mx-auto">
                <div className="group w-full rounded-lg max-w-sm overflow-hidden">
                    <Image
                        src={image.src}
                        width={1000}
                        height={350}
                        quality={100}
                        layout="responsive"
                        alt="Sunset in the mountains"
                        className="w-full rounded-lg object-cover transform transition duration-400 group-hover:scale-105 "
                    />
                </div>
                <div className="pl-0.5">
                    <div className="font-bold text-xl mt-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
            </div>
        </a>
    )
}
