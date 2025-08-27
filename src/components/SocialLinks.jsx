import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>  
            ),
            href: 'https://www.linkedin.com/in/mausoomi-roy/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>  
            ),
            href: 'https://github.com/Mausoomi12',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>  
            ),
            href: 'mailto:mausoomiroy68613@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>  
            ),
            href: '/Mausoomi_Roy.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    <li
                        key={id} 
                        className={
                            "flex justify-between items-center w-44 h-14 px-4 ml-[-110px] hover:ml-[-10px] duration-500 ease-in-out bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:scale-105" +
                            " " + style
                        }
                    >
                        <a 
                            href={href} 
                            className="flex justify-between items-center w-full"
                            download={download}
                            target='_blank'
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks;
