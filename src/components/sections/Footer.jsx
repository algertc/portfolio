import footer from '../../../data/footer.json'

export default function Footer() {
    return (
        <footer className="py-4 md:py-10 container">
            <p className="text-center font-semibold">
                Source For This Page Can Be Found on My{' '}
                <a
                    href={footer.githubLink}
                    className="transition-colors text-magenta-300 hover:text-magenta-500"
                >
                    GitHub!
                </a>
            </p>
        </footer>
    )
}
