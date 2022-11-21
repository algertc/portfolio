import socialLinks from '../../../data/socialLinks.json'
import { HiLink } from 'react-icons/hi'
import { GiHouseKeys } from 'react-icons/gi'
import { BsLinkedin } from 'react-icons/bs'

export default function Header() {
    return (
        <header className="my-4 xxl:my-7">
            <nav className="mx-5 lg:mx-8 xxl:mx-12 grid grid-cols-2 text-lg font-bold">
                <div className="flex active:border-red-500">
                    <span className="font-extrabold xxl:font-bold xl:text-[26px] xxl:text-[55px] xxl:mt-[0.7rem] xl:pt-[-20] text-[30px] leading-[28px]">~/</span>
                    <span className="ml-1.5 w-[3px] xxl:w-[6px] xl:h-[1.4rem] xl:mt-[0.38rem] lg:mt-[0.15rem] h-7 mt-0.5 xxl:mt-[0.65rem] lg:h-[1.8rem] xxl:h-[2.7rem] bg-neutral-200 xxl:ml-[0.65rem] animate-blink"></span>
                </div>
                
                <ul className="my-2 animate-slideInRight flex gap-x-6 justify-self-end items-center xl:text-3xl text-3xl xxl:text-5xl md:text-4xl">
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
