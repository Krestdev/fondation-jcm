"use client";
import Lightbox from "@/components/lightbox";
import { RevealGroup } from "@/components/reveal";
import { images } from "@/data/data";
import { GroupTag, ImageGroup } from "@/data/type";
import { sortLightboxImages } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";

function Gallery() {
    const t = useTranslations("Groups");
  const groups: GroupTag[] = [
    { group: "terassement", lang: "one" },
    { group: "construction", lang: "two" },
    { group: "à terme", lang: "three" },
    { group: "Fondation & Poutre", lang: "four" },
  ];
  const [filter, setFilter] = useState<ImageGroup["group"] | undefined>();
  const filteredImages = useMemo(() => {
    if (!filter) {
      return images;
    } else {
      return images.filter((x) => x.group === filter);
    }
  }, [filter]);
  return (
    <div className="container-base pt-0 flex flex-col gap-3">
      <div className="flex gap-2 justify-center">
        <span className="badge" onClick={() => setFilter(undefined)}>
          {t("all")}
        </span>
        {groups.map((x, i) => (
          <span
            key={i}
            className={`badge ${
              filter === x.group && "bg-primary text-slate-50 hover:bg-primary"
            }`}
            onClick={() => {
              filter === x.group ? setFilter(undefined) : setFilter(x.group);
            }}
          >
            {t(x.lang)}
          </span>
        ))}
      </div>
      <RevealGroup
        scale={0.5}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {sortLightboxImages(filteredImages).map((data, i) => (
          <Lightbox key={i} {...data} />
        ))}
      </RevealGroup>
    </div>
  );
}

export default Gallery;
