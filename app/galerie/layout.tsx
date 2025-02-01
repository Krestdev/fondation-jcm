import React from "react";
import { Metadata } from "next";
import { config } from "../config";


export const metadata:Metadata = {
    title: `Galerie - ${config.siteName}`,
    description: "Plongez au cœur des actions de la Fondation Jeanne Caroline Mfege à travers notre galerie."
} 

export default function Layout({children}:{children: React.ReactNode}){
    return (
        <div>
            {children}
        </div>
    )
}