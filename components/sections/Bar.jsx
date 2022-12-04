import { useEffect, useState } from 'react'

export default function Bar() {
    const [width, setWidth] = useState(0)

    const scrollHeight = () => {
        const el = document.documentElement
        const scrollTop = el.scrollTop
        const scrollHeight = el.scrollHeight

        setWidth((scrollTop / (scrollHeight - el.clientHeight)) * 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeight)
        return () => window.removeEventListener('scroll', scrollHeight)
    }, [])

    return (
        <div
            className="fixed top-0 h-[3px] bg-magenta-600 z-50"
            style={{ width: `${width}%` }}
        ></div>
    )
}
