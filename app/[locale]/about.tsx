'use client'
import { RevealGroup } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CircleArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

function AboutSection() {
    const t = useTranslations("HomePage");
  return (
    <div className="container-base relative overflow-clip">
        <RevealGroup
          y={25}
          delay={0.2}
          delayGap={0.2}
          className="flex flex-col gap-6 sm:gap-8 items-center"
        >
          <span className="caption-title">{t("aboutTitle")}</span>
          <h2 className="text-center max-w-(--breakpoint-lg)">
            {t("aboutDescription")}
          </h2>
          <Link href={"/a-propos"}>
            <Button size={"main"}>
              {t("aboutMore")}
              <CircleArrowRight />
            </Button>
          </Link>
        </RevealGroup>
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-full w-auto aspect-square bg-slate-50 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-4/5 w-auto aspect-square bg-slate-50 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.75,
          }}
        />
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-2/3 w-auto aspect-square bg-slate-100 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-1/2 w-auto aspect-square bg-slate-200 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.25,
          }}
        />
        <motion.div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 h-1/3 w-auto aspect-square bg-slate-300 rounded-full opacity-40 border"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
  )
}

export default AboutSection