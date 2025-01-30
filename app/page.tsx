"use client"
import CarouselServices from "@/components/carousel-services";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { easeIn } from "framer-motion/dom";
import { ArrowRight, CircleArrowRight, HeartHandshake, HeartPulse, Hospital } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="container-base w-full px-7 text-center flex flex-col gap-5 items-center">
        <h1>
          {"Un geste pour "}
          <span className="text-primary">{"sauver des vies"}</span>
          {"."}
        </h1>
        <p className="text-slate-600 max-w-(--breakpoint-md) text-sm sm:text-base lg:text-lg xl:text-xl">{`Bienvenue à la Fondation Jeanne Caroline MFEGE. Parce que chaque geste compte, ensemble, nous bâtissons un avenir où la santé est une priorité. Rejoignez-nous dans notre mission pour un impact durable.`}</p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link href={"/a-propos"}>
            <Button size={"main"}>
              {"À Propos de la fondation"}
              <CircleArrowRight />
            </Button>
          </Link>
          <Link href={"/#don"}>
            <Button size={"main"} variant={"outline"}>
              {"Faire un don"}
              <ArrowRight
                size={20}
                className="text-secondary"
                strokeWidth={3}
              />
            </Button>
          </Link>
        </div>
      </header>
      <div className="scene">
        <div className="image-container">
          <img src="/images/1.jpg" alt="image" />
        </div>
        <div className="image-container">
          <img src="/images/2.jpg" alt="image" />
        </div>
        <div className="image-container">
          <img src="/images/3.jpg" alt="image" />
        </div>
      </div>
      <div className="container-base flex flex-col gap-6 sm:gap-8 items-center relative overflow-clip">
        <span className="caption-title">{"À Propos de la Fondation"}</span>
        <h2 className="text-center max-w-(--breakpoint-lg)">
          {
            "La Fondation Jeanne Caroline Mfege tire son inspiration de la vie et des valeurs de Jeanne Caroline Mfege, une femme reconnue pour sa générosité et son dévouement."
          }
        </h2>
        <Link href={"/a-propos"}>
          <Button size={"main"}>
            {"Découvrir la fondation"}
            <CircleArrowRight />
          </Button>
        </Link>
        <motion.div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-full w-auto aspect-square bg-slate-50 rounded-full opacity-40 border" initial={{scale: 0}} animate={{scale: [1, 1.1, 1]}} transition={{duration: 2, repeat: Infinity, ease: "easeInOut", delay: .1}}/>
        <motion.div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-4/5 w-auto aspect-square bg-slate-50 rounded-full opacity-40 border" initial={{scale: 0}} animate={{scale: [1, 1.1, 1]}} transition={{duration: 2, repeat: Infinity, ease: "easeInOut", delay: .75}}/>
        <motion.div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-2/3 w-auto aspect-square bg-slate-100 rounded-full opacity-40 border" initial={{scale: 0}} animate={{scale: [1, 1.1, 1]}} transition={{duration: 2, repeat: Infinity, ease: "easeInOut", delay: .5}}/>
        <motion.div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-1/2 w-auto aspect-square bg-slate-200 rounded-full opacity-40 border" initial={{scale: 0}} animate={{scale: [1, 1.1, 1]}} transition={{duration: 2, repeat: Infinity, ease: "easeInOut", delay: .25}}/>
        <motion.div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-1/3 w-auto aspect-square bg-slate-300 rounded-full opacity-40 border" initial={{scale: 0}} animate={{scale: [1, 1.1, 1]}} transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}/>
      </div>
      <section id="missions" className="container-base grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <div className="flex flex-col gap-5">
          <h2>{"Nos Missions"}</h2>
          <p className="text-slate-600 text-base sm:text-lg">{"Inspirée par la vie et l'engagement de Jeanne Caroline Mfege, la Fondation se consacre à :"}</p>
          <ul role="list" className="grid gap-4 mt-3">
            <li className="flex gap-3">
              <span className="inline-flex shrink-0 items-center justify-center size-14 bg-primary/40 rounded-md"><HeartPulse size={24}/></span>
              <div className="flex flex-col gap-1">
                <h4>{"Lutter contre le cancer"}</h4>
                <p className="text-slate-600">{"Organisation de campagnes régulières de dépistage pour une prise en charge précoce de cette maladie silencieuse."}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex shrink-0 items-center justify-center size-14 bg-primary/40 rounded-md"><Hospital size={24}/></span>
              <div className="flex flex-col gap-1">
                <h4>{"Améliorer l'accès aux soins"}</h4>
                <p className="text-slate-600">{"Offrir des soins de qualité aux populations rurales à mobilité réduite, en complément des actions de l’État du Cameroun."}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex shrink-0 items-center justify-center size-14 bg-primary/40 rounded-md"><HeartHandshake size={24}/></span>
              <div className="flex flex-col gap-1">
                <h4>{"Soutenir les communautés locales"}</h4>
                <p className="text-slate-600">{"Répondre aux besoins liés aux maladies endémiques comme le paludisme et la fièvre typhoïde dans les villages environnants."}</p>
              </div>
            </li>
          </ul>
        </div>
        <img src="/images/1.jpg" alt="image" className="w-full h-full object-cover rounded-xl" />
      </section>
      <section id="services" className="container-base flex flex-col items-center gap-6 sm:gap-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="caption-title">{"Nos services"}</span>
          <h2 className="max-w-(--breakpoint-lg)">{"La fondation en construction prévoit d’offrir des services essentiels pour garantir des soins complets et de qualité à la communauté."}</h2>
        </div>
        <CarouselServices />
      </section>
    </main>
  );
}
