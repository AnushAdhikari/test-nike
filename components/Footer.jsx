import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT SIDE START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Find a store
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            become a partner
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            sign up for email
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            send us feedback
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            student discount
                        </div>
                    </div>
                    {/* MENU */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MOBILE MENU */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                get help
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Order Status
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Returns
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                        {/* MOBILE MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                About nike
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                News
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Investors
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT SIDE END */}

                {/* RIGHT SIDE START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    {/* JS FOR NEW TAB LINK */}
                    {/* onClick={() =>
                        window.open("https://facebook.com", "_blank")
                    } */}
                    <Link href="https://facebook.com"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-[#0866ff] cursor-pointer"
                    >
                        <FaFacebook size={20} />
                    </Link>
                    <Link
                        href="https://twitter.com"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaSquareXTwitter size={20} />
                    </Link>
                    <Link href="https://youtube.com"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-[#000000] hover:bg-[#ffffff] hover:text-[#c00] cursor-pointer">
                        <FaYoutube size={20} />
                    </Link>
                    <Link href="https://instagram.com"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-[#DD2A7B] hover:text-[#FFFFFF] cursor-pointer">
                        <FaInstagram size={20} />
                    </Link>
                </div>
                {/* RIGHT SIDE END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT SIDE */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2024 Nike, Inc. All Rights Reserved
                </div>
                {/* LEFT SIDE END */}

                {/* RIGHT SIDE START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT SIDE END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
