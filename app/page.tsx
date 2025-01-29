import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <header className="max-w-(--breakpoint-xl) mx-auto w-full px-7 text-center vertical-pad flex flex-col gap-5 items-center">
        <h1>{"Un geste pour "}<span className="text-primary">{"sauver des vies"}</span>{"."}</h1>
        <p className="text-gray-600 max-w-(--breakpoint-md) text-sm sm:text-base lg:text-lg xl:text-xl">{`Bienvenue à la Fondation Jeanne Caroline MFEGE. Parce que chaque geste compte, ensemble, nous bâtissons un avenir où la santé est une priorité. Rejoignez-nous dans notre mission pour un impact durable.`}</p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link href={"/a-propos"}><Button size={"main"}>{"À Propos de la fondation"}<span className="flex items-center justify-center bg-blue-950 size-8 text-white"><ArrowRight size={20} strokeWidth={3}/></span></Button></Link>
          <Link href={"/#don"}><Button size={"main"} variant={"outline"}>{"Faire un don"}<ArrowRight size={20} className="text-secondary" strokeWidth={3}/></Button></Link>
        </div>
      </header>
      <div className="scene">
        <div className="image-container"><img src="/images/1.jpg" alt="image"/></div>
        <div className="image-container"><img src="/images/2.jpg" alt="image"/></div>
        <div className="image-container"><img src="/images/3.jpg" alt="image"/></div>
      </div>
      <div className="max-w-(--breakpoint-xl) mx-auto vertical-pad flex flex-col gap-6 sm:gap-8 items-center">
        <span className="caption-title">{"À Propos de la Fondation"}</span>
        <h2 className="text-center max-w-(--breakpoint-md)">{" Votre appui est inestimable, et nous sommes honorés de pouvoir compter sur vous."}</h2>
        <Link href={"/a-propos"}><Button size={"main"}>{"Découvrir la fondation"}<span className="flex items-center justify-center bg-blue-950 size-8 text-white"><ArrowRight size={20} strokeWidth={3}/></span></Button></Link>
      </div>
    </main>
  );
}
