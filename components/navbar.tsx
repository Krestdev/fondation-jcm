'use client'
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./localeSwitcher";

function Navbar() {

  const t = useTranslations("Navbar");
  const navlinks = [
    { name: "home", href: "/" },
    { name: "about", href: "/a-propos" },
    { name: "services", href: "/#services" },
    { name: "gallery", href: "/galerie" },
    { name: "contact", href: "/contact" },
  ];
  return (
    <div className="w-full h-20 inline-flex items-center justify-center sticky top-0 bg-white z-20">
      <div className="inline-flex w-full max-w-(--breakpoint-xl) px-7 items-center justify-between border-b border-gray-300 h-full">
        <Link href={"/"}>
          <img src="/logo.png" alt="nav logo" className="h-12 w-auto" />
        </Link>
        <span className="hidden lg:flex items-center gap-3">
          {navlinks.map((link, i) => (
            <Link href={link.href} key={i}>
              <Button variant={"navlink"} className="text-lg">
                {t(link.name)}
              </Button>
            </Link>
          ))}
          <Link href={"/#don"}>
            <Button size={"main"}>
              {t("donate")}
              <ArrowRight size={20} />
            </Button>
          </Link>
          <LocaleSwitcher className="h-14 border-none shadow-none"/>
        </span>
        <Sheet>
          <SheetTrigger asChild className="inline-flex lg:hidden">
            <Button size={"icon"} variant={"ghost"}>
              <MenuIcon size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader className="h-16 w-full border-b border-gray-200">
              <SheetTitle>
                <img src="/logo.png" alt="logo" className="h-12 w-auto" />
              </SheetTitle>
            </SheetHeader>
            <div role="list" className="flex flex-col">
              {navlinks.map((link, i) => (
                <SheetClose asChild key={i}>
                  <Link href={link.href}>
                    <Button variant={"ghost"} className="h-14 text-lg">
                      {t(link.name)}
                    </Button>
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Link href={"/#don"}>
                  <Button size={"main"}>
                    {t("donate")}
                    <ArrowRight size={20} strokeWidth={3} />
                  </Button>
                </Link>
              </SheetClose>
              <LocaleSwitcher className="h-14 mt-4"/>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
