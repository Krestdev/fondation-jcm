"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel-services";
import { Button } from "@/components/ui/button";
import { contact, donate, images, services, whyDonate } from "@/data/data";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleArrowRight,
  HeartHandshake,
  HeartPulse,
  Hospital,
  Phone,
  Plus,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
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
      <section
        id="missions"
        className="container-base grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
      >
        <div className="flex flex-col gap-5">
          <h2>{"Nos Missions"}</h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {
              "Inspirée par la vie et l'engagement de Jeanne Caroline Mfege, la Fondation se consacre à :"
            }
          </p>
          <ul role="list" className="grid gap-4 mt-3">
            <li className="flex gap-3">
              <span className="inline-flex shrink-0 items-center justify-center size-14 bg-primary/40 rounded-md">
                <HeartPulse size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{"Lutter contre le cancer"}</h4>
                <p className="text-slate-600">
                  {
                    "Organisation de campagnes régulières de dépistage pour une prise en charge précoce de cette maladie silencieuse."
                  }
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex shrink-0 items-center justify-center size-14 bg-primary/40 rounded-md">
                <Hospital size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{"Améliorer l'accès aux soins"}</h4>
                <p className="text-slate-600">
                  {
                    "Offrir des soins de qualité aux populations rurales à mobilité réduite, en complément des actions de l’État du Cameroun."
                  }
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex shrink-0 items-center justify-center size-14 bg-primary/40 rounded-md">
                <HeartHandshake size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{"Soutenir les communautés locales"}</h4>
                <p className="text-slate-600">
                  {
                    "Répondre aux besoins liés aux maladies endémiques comme le paludisme et la fièvre typhoïde dans les villages environnants."
                  }
                </p>
              </div>
            </li>
          </ul>
        </div>
        <img
          src="/images/1.jpg"
          alt="image"
          className="w-full h-full object-cover rounded-xl"
        />
      </section>
      <section
        id="services"
        className="container-base flex flex-col items-center gap-6 sm:gap-10"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="caption-title">{"Nos services"}</span>
          <h2 className="max-w-(--breakpoint-lg)">
            {
              "La fondation en construction prévoit d’offrir des services essentiels pour garantir des soins complets et de qualité à la communauté."
            }
          </h2>
        </div>
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          setApi={setApi}
          className="py-10"
        >
          <CarouselContent className="mx-auto max-w-(--breakpoint-xl) gap-6 sm:gap-10 items-center">
            {services.map((service, i) => (
              <CarouselItem
                key={i}
                className={`basis-1/3 flex flex-col gap-3 text-center opacity-30 transition-opacity duration-1000 ease-in-out ${
                  ++i === current && "opacity-100"
                }`}
              >
                <h3 className="carousel-item-title">{service.name}</h3>
                <p className="carousel-item-description">
                  {service.description}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <span className="w-full inline-flex justify-center items-center gap-3">
            <CarouselPrevious />
            <CarouselNext />
          </span>
        </Carousel>
      </section>
      <section id="don" className="bg-secondary/10">
        <div className="container-base grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <div className="flex flex-col gap-3">
            <span className="caption-title mb-3">{"Donation"}</span>
            <h2>{"Faire un Don"}</h2>
            <p className="text-slate-600">
              {
                "Soutenez la Fondation Jeanne Caroline Mfege dans sa mission de fournir des soins de santé accessibles et de qualité. Votre contribution, quelle que soit sa nature ou son montant, peut faire une réelle différence dans la vie des populations vulnérables."
              }
            </p>
            <a href={`tel:${contact.phone}`}><Button size={"main"} className="w-fit mt-3">{"Nous contacter"}<Phone size={24}/></Button></a>
          </div>
          <div className="flex flex-col gap-10 px-5">
              <div className="flex flex-col gap-3">
                <img src="images/om.png" className="h-10 w-fit" />
                <div className="flex flex-col">
                  <h3>{"Orange Money"}</h3>
                  <p className="mt-1">{`Numero : ${donate.orangemoney}`}</p>
                  <p>{`Nom du Compte : ${donate.omName}`}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <img src="images/virement.png" className="h-10 w-fit" />
                <div className="flex flex-col">
                  <h3>{"Virement Bancaire"}</h3>
                  <p className="mt-1">{`Numero de compte : ${donate.bankAccount}`}</p>
                  <p>{`IBAN : ${donate.iban}`}</p>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section id="galerie" className="container-base flex flex-col gap-6 sm:gap-10 items-center">
        <div className="flex flex-col gap-6 items-center text-center max-w-(--breakpoint-lg)">
          <span className="caption-title">{"La fondation en images"}</span>
          <h2>{"Suivez l'évolution de la fondation"}</h2>
          <p className="text-slate-600">{"Plongez au cœur des actions de la Fondation Jeanne Caroline Mfege à travers notre galerie. Explorez l’évolution de notre infrastructure en construction, un projet ambitieux destiné à offrir des soins de santé de qualité aux populations rurales."}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          { images.slice(0,3).map((data, i)=><img key={i} src={data.src} alt={data.title} className="w-full h-auto aspect-square object-cover rounded-lg" />)}
          { images.length > 3 && <div className="bg-primary p-7 flex justify-center items-center rounded-lg hover:cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-300 ease-in-out"><span className="size-20 bg-white text-primary flex items-center justify-center rounded-full"><Plus size={80} strokeWidth={3}/></span></div> }
        </div>
      </section>
    </main>
  );
}
