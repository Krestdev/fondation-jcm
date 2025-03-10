'use client'
import React from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/carousel-services";
  import Autoplay from "embla-carousel-autoplay";
import { services } from '@/data/data';
import { RevealGroup } from '@/components/reveal';
import { useTranslations } from 'next-intl';

function Services() {

  const t = useTranslations("Services");
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
          return;
        }
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1);
        });
      }, [api]);
      
  return (
    <RevealGroup tag="section"
        id="services"
        className="container-base flex flex-col items-center gap-6 sm:gap-10 overflow-x-hidden"
        y={25} delayGap={.25}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="caption-title">{t("title")}</span>
          <h2 className="max-w-(--breakpoint-lg)">
            {t("description") }
          </h2>
        </div>
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          setApi={setApi}
          className="py-10 mx-auto max-w-(--breakpoint-xl) w-full"
        >
          <CarouselContent className="gap-6 sm:gap-10 items-center">
            {services.map((service, i) => (
              <CarouselItem
                key={i}
                className={`basis-full sm:basis-1/2 lg:basis-1/3 flex flex-col gap-3 justify-between min-h-96 text-center opacity-30 transition-opacity duration-1000 ease-in-out ${
                  ++i === current && "opacity-100"
                }`}
              >
                <img src={service.imageURL} alt={t(service.name)} className='w-full h-auto aspect-video rounded-2xl' />
                <div className='flex flex-col gap-2'>
                  <h3 className="carousel-item-title">{t(service.name)}</h3>
                  <p className="carousel-item-description">
                    {t(service.description)}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <span className="w-full inline-flex justify-center items-center gap-3 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </span>
        </Carousel>
      </RevealGroup>
  )
}

export default Services