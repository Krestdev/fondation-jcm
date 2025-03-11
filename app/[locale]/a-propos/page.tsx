import Reveal, { RevealGroup } from "@/components/reveal";
import { Hand, Handshake, Heart, Star } from "lucide-react";
import Services from "../../services";
import Missions from "./missions";
import { useTranslations } from "next-intl";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { PageProps } from "@/types/types";

function Page({params}:PageProps) {
  const {locale} = use(params);
  
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations();

  return (
    <main>
      <header className="w-full flex items-center justify-center">
        <RevealGroup
          y={25}
          className="w-full flex flex-col gap-6 py-10 sm:py-14 items-center text-center max-w-(--breakpoint-xl)"
        >
          <h1>{t("Navbar.about")}</h1>
          <p className="text-slate-600 max-w-(--breakpoint-lg)">
            {t("AboutPage.description")}
          </p>
        </RevealGroup>
      </header>
      <section id="histoire" className="bg-slate-100">
        <RevealGroup
          y={25}
          delay={0.45}
          delayGap={0.4}
          className="container-base flex flex-col gap-6 text-center pt-5"
        >
          <h2>{t("AboutPage.historyTitle")}</h2>
          <p>
            {t("AboutPage.the")}
            <strong>{t("Config.siteName")}</strong>
            {t("AboutPage.historyDescription1")}
            <br />
            {t("AboutPage.historyDescription2")}
          </p>
        </RevealGroup>
      </section>
      <Missions />
      <section
        id="valeurs"
        className="container-base grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
      >
        <RevealGroup y={25} className="flex flex-col gap-6">
          <h2>{t("AboutPage.valuesTitle")}</h2>
          <p>
            {t("AboutPage.valuesDescription")}
          </p>
          <ul role="list" className="grid gap-4 mt-3">
            <li className="flex gap-3">
              <span className="list-icon-secondary">
                <Handshake size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{t("AboutPage.values1")}</h4>
                <p>{t("AboutPage.values1Description")}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="list-icon-secondary">
                <Heart size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{t("AboutPage.values2")}</h4>
                <p>{t("AboutPage.values2Description")}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="list-icon-secondary">
                <Hand size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{t("AboutPage.values3")}</h4>
                <p>
                  {t('AboutPage.values3Description')}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="list-icon-secondary">
                <Star size={24} />
              </span>
              <div className="flex flex-col gap-1">
                <h4>{t("AboutPage.values4")}</h4>
                <p>
                  {t("AboutPage.values4Description")}
                </p>
              </div>
            </li>
          </ul>
        </RevealGroup>
        <Reveal x={25} delay={0.5} scale={0.5}>
          <img
            src="/images/values.webp"
            alt="image"
            className="w-full h-auto aspect-[4/3] rounded-lg object-cover"
          />
        </Reveal>
      </section>
      <RevealGroup
        y={15}
        className="container-base bg-secondary text-slate-50 flex flex-col gap-6 xl:rounded-xl text-center"
      >
        <h2>{t("AboutPage.ourEngagement")}</h2>
        <p className="text-slate-300">
          {t("AboutPage.ourEngagementDescription")}
        </p>
      </RevealGroup>
      <Services />
    </main>
  );
}

export default Page;
