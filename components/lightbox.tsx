"use client";
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "./ui/dialog";
import { LightboxDataitem } from "@/data/type";

export default function Lightbox(data: LightboxDataitem) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <img
          src={data.src}
          alt={data.title}
          className="w-full h-auto aspect-square object-cover rounded-lg cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="isolate p-0 bg-transparent rounded-none border-0 w-full">
        <DialogHeader className="absolute w-full h-full flex flex-col items-center justify-end pb-10 bg-gradient-to-t from-black/80 to-transparent">
          <DialogTitle className="text-center text-white">
            {data.title}
          </DialogTitle>
          {data.description && (
            <DialogDescription className="text-center text-slate-100">
              {data.description}
            </DialogDescription>
          )}
        </DialogHeader>
        <img
          src={data.src}
          alt={data.title}
          className="w-full h-auto object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
