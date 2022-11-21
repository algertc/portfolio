export default function Statcard({icon, description, sub, ...props }) {
        return (
            <div className="bg-black-100 mx-auto rounded-lg overflow-hidden" {...props}>
                

                <div>
                <img
                    src={icon}
                    className="pt-6 xxl:pt-[5rem] xl:pt-[2rem] w-20 lg:w-25 xl:w-[6rem] xxl:w-[9rem] h-auto transition-transform duration-200 hover:scale-125 xl:hover:scale-110 xxl:hover:scale-110 mx-auto"
                />
                </div>
            <div className="md:p-3 lg:p-3 pt-3 xxl:pt-8 text-center mb-12 xl:mb-6 xxl:mb-4 bg-black-100">
                    <h1 className="text-2xl md:text-3xl lg:text-3xl xxl:text-4xl xxl:mb-[0.2rem] w-full text-transparent bg-clip-text font-extrabold bg-m2-200">{description}</h1>
                    <p className="font-display text-sm xxl:text-[1.2rem] w-full text-center">{sub}</p>
                </div>
            </div>
        )
    }