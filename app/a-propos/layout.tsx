import React from "react";
import { Metadata } from "next";
import { config } from "../config";


export const metadata:Metadata = {
    title: `À Propos - ${config.siteName}`,
    description: "La Fondation Jeanne Caroline Mfege tire son inspiration de la vie et des valeurs de Jeanne Caroline Mfege, une femme reconnue pour sa générosité et son dévouement."
} 

export default function Layout({children}:{children: React.ReactNode}){
    return (
        <div>
            {children}
        </div>
    )
}