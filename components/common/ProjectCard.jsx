import Image from 'next/image'

export default function Card({ link, title, description, image }) {
    return (
        <a href={link} target="_blank" className="transform transition duration-500 hover:scale-105">
            <div className="group max-w-sm md:max-w-2xl lg:max-w-sm xl:max-w-md xxl:max-w-xl rounded-lg overflow-hidden shadow-lg hover:shadow-xl p-4 cursor-pointer scale-101 lg:scale-auto xl:scale-[1.5] xxl:scale-[1.5] mx-auto bg-[#0c0f12] hover:bg-gray-800">
                <div className="relative p-[2px] bg-gradient-to-r from-rose-400 via-m2-200 to-indigo-500 rounded-lg">
                    <div className="w-full h-full bg-black rounded-lg overflow-hidden">
                        <Image
                            src={image.src}
                            width={1000}
                            height={600}
                            quality={100}
                            layout="responsive"
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-lg transform transition duration-400 group-hover:scale-110"
                        />
                    </div>
                </div>
                <div className="py-2 text-white">
                    <div className="font-bold text-xl mt-2">{title}</div>
                    <p className="text-gray-400 text-base">{description}</p>
                </div>
            </div>
        </a>
    );
    }

