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
      <div className="mx-auto max-w-(--breakpoint-xl) grid grid-cols-1 sm:grid-cols-3 gap-10 transform-3d perspective-distant">
        <div className=" translate-3d scale-x-100 scale-y-125 scale-z-150 rotate-y-[40deg] w-full h-auto aspect-[4/3] overflow-hidden"><img src="https://images.pexels.com/photos/6647117/pexels-photo-6647117.jpeg" alt="image" className="rounded-md w-full h-full object-cover" /></div>
        <div className=" translate-3d translate-z-[-50px] scale-x-100 scale-100 w-full h-auto aspect-[4/3] "><img src="https://images.pexels.com/photos/6647117/pexels-photo-6647117.jpeg" alt="image" className="w-full h-auto aspect-[4/3] object-cover" /></div>
        <div className="-translate-z-0 -rotate-y-[10deg] w-full h-auto aspect-[4/3] overflow-hidden"><img src="https://images.pexels.com/photos/6647117/pexels-photo-6647117.jpeg" alt="image" className="w-full h-auto aspect-[4/3] object-cover" /></div>
      </div>
    </main>
  );
}
