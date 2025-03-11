import { RevealGroup } from "@/components/reveal";
import { PageProps } from "@/types/types";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import React from "react";
import Gallery from "./gallery";

function Page({params}:PageProps) {
  const {locale} = React.use(params);
  
    // Enable static rendering
    setRequestLocale(locale);
  const t = useTranslations("Gallery");

  return (
    <main>
      <header className="w-full flex items-center justify-center">
        <RevealGroup y={25} className="w-full flex flex-col gap-6 py-10 sm:py-14 items-center text-center max-w-(--breakpoint-xl)">
          <h1>{t("title")}</h1>
          <p className="text-slate-600 max-w-(--breakpoint-lg)">
            {t("description")}
          </p>
        </RevealGroup>
      </header>
      <Gallery/>
    </main>
  );
}

export default Page;
