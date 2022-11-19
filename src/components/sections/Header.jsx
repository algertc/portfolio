import socialLinks from '../../../data/socialLinks.json'
import { HiLink } from 'react-icons/hi'
import { GiHouseKeys } from 'react-icons/gi'
import { BsLinkedin } from 'react-icons/bs'

export default function Header() {
    return (
        <header className="my-4">
            <nav className="mx-5 lg:mx-8 grid grid-cols-2 text-lg font-bold">
                <div className="flex active:border-red-500">
                    <span className="font-extrabold xl:text-[26px] xl:pt-[-20] text-[30px] leading-[28px]">~/</span>
                    <span className="ml-1.5 w-[3px] xl:h-6 xl:mt-1 h-8 bg-neutral-200 animate-blink"></span>
                </div>
                
                <ul className="my-2 animate-slideInRight flex gap-x-6 justify-self-end items-center xl:text-3xl text-3xl md:text-4xl">
                    <li>
                        <a
                            href={socialLinks.linkedIn}
                            target="_blank"
                            className="transition-colors hover:text-magenta-500"
                        >
                            <BsLinkedin />
                        </a>
                    </li>
                    <li>
                        <a
                            href={socialLinks.publicKeyLink}
                            target="_blank"
                            className="transition-colors hover:text-magenta-500"
                        >
                            <GiHouseKeys />
                        </a>
                    </li>
                    <li>
                        <a
                            href={socialLinks.anchorLink}
                            target="_blank"
                            className="transition-colors hover:text-magenta-500"
                        >
                            <HiLink />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
