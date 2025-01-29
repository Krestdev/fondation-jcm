import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <header className="max-w-(--breakpoint-xl) mx-auto w-full px-7 text-center vertical-pad flex flex-col gap-5 items-center">
        <h1>{"Un geste pour "}<span className="text-primary">{"sauver des vies"}</span>{"."}</h1>
        <p className="text-gray-600 max-w-(--breakpoint-md) text-sm sm:text-base lg:text-lg xl:text-xl">{`Avec la Fondation Jeanne Caroline MFEGE un don pour la santé est une contribution précieuse qui cultive le bien-être et répand l'espoir.`}</p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link href={"/a-propos"}><Button size={"main"}>{"À Propos de la fondation"}</Button></Link>
          <Link href={"/#don"}><Button size={"main"} variant={"outline"}>{"Faire un don"}<ArrowRight size={20} className="text-secondary" /></Button></Link>
        </div>
      </header>
      <div className="scene">
        <div className="image-container"><img src="/images/1.jpg" alt="image"/></div>
        <div className="image-container"><img src="/images/2.jpg" alt="image"/></div>
        <div className="image-container"><img src="/images/3.jpg" alt="image"/></div>
      </div>
    </main>
  );
}
