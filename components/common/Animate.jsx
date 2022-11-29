import { useInView } from 'react-intersection-observer'

export default function Animate({
    as: Component = 'div',
    classNames = '',
    animateClass = 'animate-fadeIn',
    animateDurationClass = 'animate-duration-[500ms]',
    animateDelay = 0,
    children,
    ...props
}) {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    })

    return (
        <Component
            ref={ref}
            style={{ animationDelay: `${animateDelay}ms` }}
            className={`${classNames} ${
                inView ? `${animateClass} ${animateDurationClass}` : '!opacity-0'
            }`}
            {...props}
        >
            {children}
        </Component>
    )
}
