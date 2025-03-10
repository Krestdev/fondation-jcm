"use client";
import Lightbox from "@/components/lightbox";
import Reveal, { RevealGroup } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { contact, donate, images } from "@/data/data";
import { motion } from "framer-motion";
import { ArrowRight, CircleArrowRight, Mail, Phone, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Missions from "./a-propos/missions";
import Services from "../services";
import { useTranslations } from "next-intl";

export default function Home() {
  const route = useRouter();
  const t = useTranslations("HomePage");

  return (
    <main>
      <RevealGroup
        y={20}
        delay={0.2}
        delayGap={0.3}
        className="container-base w-full px-7 text-center flex flex-col gap-5 items-center"
      >
        <h1>
          {t("mainTitle1")}
          <span className="text-primary">{t("mainTitle2")}</span>
        </h1>
        <p className="text-slate-600 max-w-(--breakpoint-md) text-sm sm:text-base lg:text-lg xl:text-xl">{t("subtitle")}</p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link href={"/a-propos"}>
            <Button size={"main"}>
              {t("aboutTitle")}
              <CircleArrowRight />
            </Button>
          </Link>
          <Link href={"/#don"}>
            <Button size={"main"} variant={"outline"}>
              {t("donateButton")}
              <ArrowRight
                size={20}
                className="text-secondary"
                strokeWidth={3}
              />
            </Button>
          </Link>
        </div>
      </RevealGroup>
      <div className="scene">
        <div className="image-container">
          <Reveal x={-15} scale={0} delay={0.25} duration={1.2}>
            <img src="/images/galerie/generated2.webp" alt="image" />
          </Reveal>
        </div>
        <div className="image-container">
          <Reveal
            scale={0}
            delay={0.2}
            duration={1.2}
            className="w-full h-full"
          >
            <img src="/images/galerie/3d.webp" alt="image" />
          </Reveal>
        </div>
        <div className="image-container">
          <Reveal x={15} scale={0} delay={0.35} duration={1.2}>
            <img src="/images/galerie/Medecine-Generale.webp" alt="image" />
          </Reveal>
        </div>
      </div>
      <div className="container-base relative overflow-clip">
        <RevealGroup
          y={25}
          delay={0.2}
          delayGap={0.2}
          className="flex flex-col gap-6 sm:gap-8 items-center"
        >
          <span className="caption-title">{t("aboutTitle")}</span>
          <h2 className="text-center max-w-(--breakpoint-lg)">
            {t("aboutDescription")}
          </h2>
          <Link href={"/a-propos"}>
            <Button size={"main"}>
              {t("aboutMore")}
              <CircleArrowRight />
            </Button>
          </Link>
        </RevealGroup>
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-full w-auto aspect-square bg-slate-50 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-4/5 w-auto aspect-square bg-slate-50 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.75,
          }}
        />
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-2/3 w-auto aspect-square bg-slate-100 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-1/2 w-auto aspect-square bg-slate-200 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.25,
          }}
        />
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-1/3 w-auto aspect-square bg-slate-300 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <Missions />
      <Services />
      <section id="don" className="bg-secondary/10">
        <div className="container-base grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <RevealGroup
            y={25}
            delay={0}
            delayGap={0.25}
            className="flex flex-col gap-3"
          >
            <span className="caption-title mb-3">{t("donatePre")}</span>
            <h2>{t("donateButton")}</h2>
            <p className="text-slate-600">
              {t("donateDescription")}
            </p>
            <a href={`tel:${contact.phone}`}>
              <Button size={"main"} className="w-fit mt-3">
                {t("contactUs")}
                <Phone size={24} />
              </Button>
            </a>
          </RevealGroup>
          <RevealGroup
            y={25}
            delayGap={0.25}
            className="flex flex-col gap-10 px-5"
          >
            <div className="flex flex-col gap-3">
              <img
                src="/images/om.png"
                alt="om"
                className="h-10 w-auto object-contain object-left"
              />
              <div className="flex flex-col">
                <h3>{"Orange Money"}</h3>
                <p className="mt-1">{t("number")}{donate.orangemoney}</p>
                <p>{t("accountName")}{donate.omName}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src="/images/virement.png"
                alt="virement"
                className="h-10 w-auto object-contain object-left"
              />
              <div className="flex flex-col">
                <h3>{t("bankTransfer")}</h3>
                <p className="mt-1">{t("accountName")}{donate.bankAccount}</p>
                <p>{`IBAN : ${donate.iban}`}</p>
              </div>
            </div>
          </RevealGroup>
        </div>
      </section>
      <section
        id="galerie"
        className="container-base flex flex-col gap-6 sm:gap-10 items-center"
      >
        <RevealGroup
          y={25}
          delayGap={0.25}
          delay={0.25}
          className="flex flex-col gap-6 items-center text-center max-w-(--breakpoint-lg)"
        >
          <span className="caption-title">{t("galleryCaption")}</span>
          <h2>{t("galleryTitle")}</h2>
          <p className="text-slate-600">
            {t("galleryDescription")}
          </p>
        </RevealGroup>
        <RevealGroup
          x={25}
          delay={0.25}
          delayGap={0.25}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {images.slice(0, 3).map((data, i) => (
            <Lightbox key={i} {...data} />
          ))}
          {images.length > 3 && (
            <div
              className="bg-primary h-full p-7 flex justify-center items-center rounded-lg hover:cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              onClick={() => route.push("/galerie")}
            >
              <span className="size-20 bg-white text-primary flex items-center justify-center rounded-full">
                <Plus size={80} strokeWidth={3} />
              </span>
            </div>
          )}
        </RevealGroup>
      </section>
      <section className="container-base grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12">
        <RevealGroup
          x={-25}
          delay={0.25}
          delayGap={0.3}
          className="flex flex-col gap-6"
        >
          <span className="caption-title">{t("contactUs")}</span>
          <h2 className="max-w-(--breakpoint-lg)">
            {t("contactTitle")}
          </h2>
          <p className="text-slate-600">
            {t("contactDescription")}
          </p>
          <ul role="list" className="grid gap-4 mt-3">
            <li>
              <a href={`tel:${contact.phone}`} className="li-contact group">
                <span className="li-contact-span">
                  <Phone size={24} />
                </span>
                <span className="flex flex-col">
                  <p className="text-slate-600">{t("phone")}</p>
                  <h4 className="group-hover:text-primary transition-colors duration-300 ease-in-out">
                    {donate.orangemoney}
                  </h4>
                </span>
              </a>
            </li>
            <li className="w-full overflow-x-hidden">
              <a href={`mailto:${contact.email}`} className="li-contact group">
                <span className="li-contact-span">
                  <Mail size={24} />
                </span>
                <span className="flex flex-col">
                  <p className="text-slate-600">{t("mail")}</p>
                  <h4 className="group-hover:text-primary transition-colors duration-300 ease-in-out max-w-full overflow-hidden text-clip">
                    {contact.email}
                  </h4>
                </span>
              </a>
            </li>
          </ul>
        </RevealGroup>
        <Reveal x={25} delay={0.5}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14185.523631079952!2d11.836026955840595!3d3.87905469118663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNTInNjAuMCJOIDExwrA0OSc2MC4wIkU!5e0!3m2!1sfr!2sde!4v1739616572891!5m2!1sfr!2sde"
            className="border-0 w-full h-full rounded-xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </main>
  );
}
