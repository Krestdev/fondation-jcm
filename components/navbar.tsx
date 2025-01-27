import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, MenuIcon } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

function Navbar() {
    const navlinks = [
        {name: 'Accueil', href: '/'},
        {name: 'À propos', href: '/a-propos'},
        {name: 'Services', href: '/#services'},
        {name: 'Gallerie', href: '/gallerie'},
        {name: 'Contact', href: '/contact'}
    ]
  return (
    <div className='w-full h-20 inline-flex items-center justify-center sticky top-0 bg-white z-20'>
        <div className='inline-flex w-full max-w-screen-xl px-7 items-center justify-between border-b border-gray-300 h-full'>
            <img src='/logo.png' className='h-12 w-auto' />
            <span className='hidden lg:flex items-center gap-3'>
                {navlinks.map((link, i)=>
                <Link href={link.href} key={i}><Button variant={"navlink"} className='text-lg'>{link.name}</Button></Link>)}
            <Link href={"/#don"}><Button size={"main"}>{"Faire un don"}<ArrowRight size={20}/></Button></Link>
            </span>
            <Sheet>
                <SheetTrigger asChild className='inline-flex lg:hidden'>
                    <Button size={"icon"} variant={"ghost"}><MenuIcon size={24}/></Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader className='h-16 w-full border-b border-gray-200'>
                        <SheetTitle><img src="/logo.png" className='h-12 w-auto'/></SheetTitle>
                    </SheetHeader>
                    <div role="list" className='flex flex-col'>
                        {navlinks.map((link, i)=><SheetClose asChild key={i}><Link href={link.href}><Button variant={"ghost"} className='h-14 text-lg'>{link.name}</Button></Link></SheetClose>)}
                        <SheetClose asChild><Link href={"/#don"}><Button size={"main"}>{"Faire un don"}<ArrowRight size={20}/></Button></Link></SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    </div>
  )
}

export default Navbar