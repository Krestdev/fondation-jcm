"use client"
import Reveal, { RevealGroup } from "@/components/reveal";
import { HeartHandshake, HeartPulse, Hospital } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Missions() {

  const t = useTranslations("AboutPage");

  return (
    <section
      id="missions"
      className="container-base grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
    >
      <RevealGroup y={25} delayGap={0.2} className="flex flex-col gap-5">
        <h2>{t("ourMissions")}</h2>
        <p className="text-slate-600 text-base sm:text-lg">
          {t("missionDescription")}
        </p>
        <ul role="list" className="grid gap-4 mt-3">
          <li className="flex gap-3">
            <span className="list-icon-span">
              <HeartPulse size={24} />
            </span>
            <div className="flex flex-col gap-1">
              <h4>{t("mission1Title")}</h4>
              <p className="text-slate-600">
                {t("mission1Description")}
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="list-icon-span">
              <Hospital size={24} />
            </span>
            <div className="flex flex-col gap-1">
              <h4>{t("mission2Title")}</h4>
              <p className="text-slate-600">
                {t("mission2Description")}
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="list-icon-span">
              <HeartHandshake size={24} />
            </span>
            <div className="flex flex-col gap-1">
              <h4>{t("mission3Title")}</h4>
              <p className="text-slate-600">
                {t("mission3Description")}
              </p>
            </div>
          </li>
        </ul>
      </RevealGroup>
      <Reveal x={20} y={20} scale={0.5} delay={0.5} duration={1}>
        <img
          src="/images/mission.webp"
          alt="image"
          className="w-full h-full object-cover rounded-xl"
        />
      </Reveal>
    </section>
  );
}
