import { RevealGroup } from '@/components/reveal'
import { contact, donate } from '@/data/data'
import { Mail, Phone } from 'lucide-react'
import React from 'react'

function Page() {
  return (
    <main>
      <header className="w-full flex items-center justify-center">
        <RevealGroup y={25} className="w-full flex flex-col gap-6 py-10 sm:py-14 items-center text-center max-w-(--breakpoint-xl)">
          <h1>{"Contact"}</h1>
          <p className="text-slate-600 max-w-(--breakpoint-lg)">
            {
              "Vous avez une question, souhaitez en savoir plus sur nos actions ou envisager un partenariat ? La Fondation Jeanne Caroline Mfege est à votre écoute."
            }
          </p>
        </RevealGroup>
      </header>
      <section className='container-base flex flex-col gap-6 sm:gap-10 pt-5 items-center'>
        <RevealGroup x={15} className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-screen-lg'>
          <a href={`tel:${contact.phone}`} className='flex gap-3'>
            <span className='flex items-center justify-center size-14 bg-slate-300 text-slate-700 rounded-md shrink-0 grow-0'>
              <Phone size={24}/>
            </span>
            <div className='flex flex-col'>
              <p>{"Numéro de Téléphone"}</p>
              <h4>{donate.orangemoney}</h4>
            </div>
          </a>
          <a href={`mailto:${contact.email}`} className='flex gap-3'>
            <span className='flex items-center justify-center size-14 bg-slate-300 text-slate-700 rounded-md shrink-0 grow-0'>
              <Mail size={24}/>
            </span>
            <div className='flex flex-col w-full overflow-hidden'>
              <p>{"Adresse Mail"}</p>
              <h4>{contact.email}</h4>
            </div>
          </a>
        </RevealGroup>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d127378.97158522412!2d11.719677!3d3.8970749999999996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1738409512022!5m2!1sfr!2scm" className="border-0 w-full h-auto aspect-[4/3] sm:aspect-[3/1] rounded-xl" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
      </section>
    </main>
  )
}

export default Page