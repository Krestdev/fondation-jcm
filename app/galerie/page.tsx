import Lightbox from "@/components/lightbox";
import { images } from "@/data/data";
import React from "react";

function Page() {
  return (
    <main>
      <header className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col gap-6 py-10 sm:py-14 items-center text-center max-w-(--breakpoint-xl)">
          <h1>{"Galerie"}</h1>
          <p className="text-slate-600 max-w-(--breakpoint-lg)">
            {
              "Plongez au cœur des actions de la Fondation Jeanne Caroline Mfege à travers notre galerie. Explorez l’évolution de notre infrastructure en construction, un projet ambitieux destiné à offrir des soins de santé de qualité aux populations rurales."
            }
          </p>
        </div>
      </header>
      <div className="container-base pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          { images.map((data, i)=><Lightbox key={i} data={data}/>)}
        </div>
    </main>
  );
}

export default Page;
