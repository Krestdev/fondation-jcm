import { Hand, Handshake, Heart, HeartHandshake, HeartPulse, Hospital, Star } from "lucide-react";
import Services from "../services";
import Reveal, { RevealGroup } from "@/components/reveal";

function Page() {
  return (
    <main>
      <header className="w-full flex items-center justify-center">
        <RevealGroup y={25} className="w-full flex flex-col gap-6 py-10 sm:py-14 items-center text-center max-w-(--breakpoint-xl)">
          <h1>{"À propos"}</h1>
          <p className="text-slate-600 max-w-(--breakpoint-lg)">
            {
              "Ensemble pour des soins de qualité et un avenir en meilleure santé"
            }
          </p>
        </RevealGroup>
      </header>
      <section id="histoire" className="bg-slate-100">
        <RevealGroup y={25} delay={.45} delayGap={.4} className="container-base flex flex-col gap-6 text-center pt-5">
          <h2>{"Notre Histoire"}</h2>
        <p>
          {"La "}
          <strong>{"Fondation Jeanne Caroline MFEGE"}</strong>
          {
            " est née d'une histoire de résilience, de foi et d'amour. Le 10 mai 2021, Jeanne Caroline MFEGE nous quittait des suites d'un cancer des ovaires, après un long combat mené avec courage et dignité. Cette épreuve, marquée par des périodes de souffrance intense et des difficultés d'accès aux soins, a été transcendée par une profonde spiritualité et une confiance en Dieu."
          }
          <br/>{"C'est dans cet esprit que son époux et ses proches ont souhaité perpétuer son héritage en mettant en place une fondation dédiée à l'accès aux soins pour les populations vulnérables. Portée par l'idéal de solidarité et de bienveillance qui animait Jeanne Caroline, cette initiative vise à offrir des services de santé essentiels à ceux qui en ont le plus besoin."}
        </p>
        </RevealGroup>
        
      </section>
      <MissionsSection/>
      <section id="valeurs" className="container-base grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <RevealGroup y={25} className="flex flex-col gap-6">
          <h2>{"Nos Valeurs"}</h2>
          <p>{"La fondation repose sur des valeurs fortes qui guident nos actions au quotidien"}</p>
          <ul role="list" className="grid gap-4 mt-3">
            <li className="flex gap-3">
              <span className="list-icon-secondary">
                <Handshake size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{"Solidarité"}</h4>
                <p>
                  {
                    "Offrir des soins accessibles aux plus démunis."
                  }
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="list-icon-secondary">
                <Heart size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{"Humanité"}</h4>
                <p>
                  {
                    "Accueillir chaque patient avec compassion et respect."
                  }
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="list-icon-secondary">
                <Hand size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{"Engagement"}</h4>
                <p>
                  {
                    "Servir avec dévouement pour améliorer la qualité de vie des populations."
                  }
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="list-icon-secondary">
                <Star size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{"Excellence"}</h4>
                <p>
                  {
                    "Garantir des soins de qualité à travers des services médicaux professionnels."
                  }
                </p>
              </div>
            </li>
          </ul>
        </RevealGroup>
        <Reveal x={25} delay={.5} scale={0.5}>
          <img src="/images/galerie/study.webp" alt="image" className="w-full h-auto aspect-[4/3] rounded-lg object-cover" />
        </Reveal>
      </section>
      <RevealGroup y={15} className="container-base bg-secondary text-slate-50 flex flex-col gap-6 xl:rounded-xl text-center">
          <h2>{"Notre Engagement envers les Populations Rurales"}</h2>
          <p className="text-slate-300">{"La fondation intervient en complément des actions de l’État pour répondre aux besoins sanitaires des populations rurales. De nombreux villages avoisinants (Ekiembié 2, Eyek, Ekiembié 1, Akekela, Zili, Ebolsi, Ngou, etc.) ont un accès limité aux infrastructures de santé. Nous nous engageons à réduire cette fracture médicale en mettant en place une structure de soins de proximité."}</p>
        </RevealGroup>
        <Services/>
    </main>
  );
}

export default Page;

export const MissionsSection = () =>
  <section
        id="missions"
        className="container-base grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
      >
        <RevealGroup y={25} delayGap={.2} className="flex flex-col gap-5">
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
        <Reveal x={20} y={20} scale={0.5} delay={.5} duration={1}>
          <img
            src="/images/galerie/Medecine-Generale.webp"
            alt="image"
            className="w-full h-full object-cover rounded-xl"
          />
        </Reveal>
      </section>
