export default function Title({ as: Component = 'h1', children, ...props }) {
    return (
        <Component
            className="text-5xl text-center lg:text-left font-bold mb-14"
            data-aos="fade-in"
            data-aos-duration="1000"
            {...props}
        >
            {children}
        </Component>
    )
}
