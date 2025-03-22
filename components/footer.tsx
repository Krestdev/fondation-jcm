'use client'
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { config } from "@/app/config";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./localeSwitcher";

function Footer({locale}:{locale:string}) {

  const t = useTranslations();

  return (
    <footer className="container-base xl:rounded-t-xl bg-slate-900 text-slate-50 py-10 sm:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col gap-3 w-full">
          <img
            src="/logo-dark.png"
            alt="logo"
            className="h-20 w-auto object-contain object-left"
          />
          <h4>{t("Config.siteName")}</h4>
          <p className="font-primary text-sm md:text-base max-w-sm text-slate-300">
            {t("Footer.description")}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 md:justify-end">
          <ul role="link" className="flex flex-col gap-1">
            <li>
              <Link href={`/`} className="footer-link">
                {t("Navbar.home")}
              </Link>
            </li>
            <li>
              <Link href={`/a-propos`} className="footer-link">
                {t("Navbar.about")}
              </Link>
            </li>
            <li>
              <Link href={`/#services`} className="footer-link">
                {t("Navbar.services")}
              </Link>
            </li>
          </ul>
          <ul role="list" className="flex flex-col gap-1">
            <li>
              <Link href={`/galerie`} className="footer-link">
                {t("Navbar.gallery")}
              </Link>
            </li>
            <li>
              <Link href={`/contact`} className="footer-link">
                {t("HomePage.contactUs")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-800 flex justify-between flex-wrap gap-6 sm:gap-10">
        <div className="flex flex-col gap-1">
          <p className="text-slate-300">{`© Copyright 2025 ${t(config.siteName)}. ${t("Footer.rights")}`}</p>
          <p className="text-slate-400">
            {t("Footer.poweredBy")}
            <a
              href="https://krestdev.com"
              target="_blank"
              className="font-semibold hover:text-secondary transition-colors duration-300 ease-in-out"
            >
              {"KrestDev"}
            </a>
          </p>
        </div>
        <span className="inline-flex gap-2 items-center">
          <LocaleSwitcher className="h-14 px-4 border-secondary bg-white text-gray-900"/>
        <Link href={`/#don`}>
          <Button size={"main"} variant={"secondary"}>
            {t("HomePage.donateButton")}
            <span className="flex items-center justify-center size-9 bg-slate-900 text-slate-100">
              <ArrowRight size={24} strokeWidth={2} />
            </span>
          </Button>
        </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
