import Reveal, { RevealGroup } from "@/components/reveal";
import { HeartHandshake, HeartPulse, Hospital } from "lucide-react";
import React from "react";

export default function Missions() {
  return (
    <section
      id="missions"
      className="container-base grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
    >
      <RevealGroup y={25} delayGap={0.2} className="flex flex-col gap-5">
        <h2>{"Nos Missions"}</h2>
        <p className="text-slate-600 text-base sm:text-lg">
          {
            "Inspirée par la vie et l'engagement de Jeanne Caroline Mfege, la Fondation se consacre à :"
          }
        </p>
        <ul role="list" className="grid gap-4 mt-3">
          <li className="flex gap-3">
            <span className="list-icon-span">
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
            <span className="list-icon-span">
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
            <span className="list-icon-span">
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
      </RevealGroup>
      <Reveal x={20} y={20} scale={0.5} delay={0.5} duration={1}>
        <img
          src="images/galerie/Medecine-Generale.webp"
          alt="image"
          className="w-full h-full object-cover rounded-xl"
        />
      </Reveal>
    </section>
  );
}
