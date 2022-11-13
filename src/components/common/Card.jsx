export default function Card({ link, title, image, ...props }) {
    return (
        <div className="h-24 w-full rounded-lg overflow-hidden" {...props}>
            <div className="h-full">
                <img
                    src={image.src}
                    className="h-32 w-full oject-cover object-center rounded-lg transition-transform duration-200 hover:scale-125"
                />
            </div>
        </div>
    )
}
