'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import { UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function CarouselServices() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const services = [
        {
          name: "Imagerie médicale",
          description: "Examens pour un diagnostic précis grâce aux technologies d’imagerie avancées."
        },
        {
          name: "Radiologie",
          description: "Services spécialisés pour l’identification et le suivi des pathologies."
        },
        {
          name: "Pédiatrie",
          description: "Soins médicaux dédiés aux enfants pour leur santé et leur bien-être."
        },
        {
          name: "Oncologie",
          description: "Prise en charge des patients atteints de cancer avec des traitements adaptés."
        },
        {
          name: "Cardiologie",
          description: "Services pour le dépistage, la prévention et le traitement des maladies cardiaques."
        },
        {
          name: "Médecine générale",
          description: "Consultations pour une gestion globale de la santé et des soins primaires."
        }
      ];
      const [selectedSnap, setSelectedSnap] = React.useState<number>(0);
      const updateScrollSnapState = React.useCallback(() => {
        setSelectedSnap(emblaApi?.selectedScrollSnap()??0)
      }, [])
    
      React.useEffect(() => {
        if (!emblaApi) return
    
        setSelectedSnap(emblaApi.selectedScrollSnap())
        emblaApi.on('select', updateScrollSnapState)
        emblaApi.on('reInit', updateScrollSnapState)
      }, [emblaApi, updateScrollSnapState])

  return (
    <div className="container-base py-10 w-full overflow-hidden" role="region" aria-roledescription="carousel" ref={emblaRef}>
      <div className="flex gap-10 w-full items-center">
        {services.map((service, index) =>
        <div key={index} className={`min-w-0 shrink-0 grow-0 basis-1/3 flex-col gap-3 text-center transition-opacity duration-1000 ease-in-out ${selectedSnap === index ? 'opacity-100' : 'opacity-30'}`}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary">{service.name}</h3>
            <p className="text-slate-600">{service.description}</p>
        </div> )}
      </div>
      <div className='flex gap-3 mt-8 justify-center'>
        <span className='carousel-btn' onClick={()=>emblaApi?.scrollPrev()}><ArrowLeft size={24} strokeWidth={2}/></span>
        <span className='carousel-btn' onClick={()=>emblaApi?.scrollNext()}><ArrowRight size={24} strokeWidth={2}/></span>
      </div>
    </div>
  )
}

export default CarouselServices