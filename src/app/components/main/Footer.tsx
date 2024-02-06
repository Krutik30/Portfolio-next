import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Link
                                href={"https://www.youtube.com/channel/UCFRXx5dwEHk3zyIG0Hh7aHA"}
                                className="flex cursor-pointer"
                            >
                                <FaYoutube />
                                <span className="text-[15px] ml-[6px]">Youtube</span>
                            </Link>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Link
                                href={"https://github.com/Krutik30"}
                                className="flex cursor-pointer"
                            >
                                <RxGithubLogo />
                                <span className="text-[15px] ml-[6px]">Github</span>
                            </Link>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Link
                                href={"https://discord.com/users/939470059187875850"}
                                className="flex cursor-pointer"
                            >
                                <RxDiscordLogo />
                                <span className="text-[15px] ml-[6px]">Discord</span>
                            </Link>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">...</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Link
                                href={"agherakrutik99@gmail.com"}
                            >
                                <span className="text-[15px] ml-[6px]">agherakrutik99@gmail.com</span>
                            </Link>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">...</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Aghera Krutik 2024
                </div>
            </div>
        </div>
    )
}

export default Footer