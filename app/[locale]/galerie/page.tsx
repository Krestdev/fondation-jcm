'use client'
import Lightbox from "@/components/lightbox";
import { RevealGroup } from "@/components/reveal";
import { images } from "@/data/data";
import { ImageGroup } from "@/data/type";
import { sortLightboxImages } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";

function Page() {
  const t = useTranslations("Gallery");
  const groups:ImageGroup["group"][] = ["terassement","construction","à terme"];
  const [filter, setFilter] = useState<ImageGroup["group"]|undefined>()
  const filteredImages  = useMemo(()=>{
    if(!filter){
      return images;
    } else {
      return images.filter(x => x.group === filter)
    }
  }, [filter])

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
      <div className="container-base pt-0 flex flex-col gap-3">
        <div className="flex gap-2 justify-center">
          <span className="badge" onClick={()=>setFilter(undefined)}>{"Tout"}</span>
          {
            groups.map((x, i)=><span key={i} className={`badge ${filter === x && "bg-primary text-slate-50 hover:bg-primary"}`} onClick={()=>{filter === x ? setFilter(undefined) : setFilter(x)}} >{x}</span>)
          }
        </div>
        <RevealGroup scale={.5} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          { sortLightboxImages(filteredImages).map((data, i)=><Lightbox key={i} {...data}/>)}
        </RevealGroup>
        </div>
    </main>
  );
}

export default Page;
