import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <script defer data-domain="charliealgert.com" src="https://charliealgert.com/js/script.js"></script>
            <body className="bg-black text-neutral-300">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
