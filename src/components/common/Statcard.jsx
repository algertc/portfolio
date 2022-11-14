export default function Statcard({icon, description, sub, ...props }) {
        return (
            <div className="bg-black-100 mx-auto rounded-lg overflow-hidden" {...props}>
                

                <div>
                <img
                    src={icon}
                    className="pt-6 w-20 lg:w-25 h-auto transition-transform duration-200 hover:scale-125 mx-auto"
                />
                </div>
            <div className="md:p-3 lg:p-3 pt-3 text-center mb-12 bg-black-100">
                    <h1 className="text-2xl md:text-3xl lg:text-3xl w-full text-transparent bg-clip-text font-extrabold bg-m2-200">{description}</h1>
                    <p className="font-display text-sm w-full text-center">{sub}</p>
                </div>
            </div>
        )
    }