"use client";

import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setshowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper>
        <Link href='/'>
          <Image
            src="/assets/logo.svg"
            alt="logo"
            height={30}
            width={40}
            className="w-[40px] md:w-[60px]"
          ></Image>
        </Link>
        <Menu showCatMenu={showCatMenu} setshowCatMenu={setshowCatMenu}/>
      </Wrapper>
    </header>
  );
};

export default Header;