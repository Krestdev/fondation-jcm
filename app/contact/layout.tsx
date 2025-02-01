import React from "react";
import { Metadata } from "next";
import { config } from "../config";


export const metadata:Metadata = {
    title: `Contact - ${config.siteName}`,
    description: "Contactez la Fondation Jeanne Caroline Mfege pour toute information, partenariat ou contribution. Ensemble, œuvrons pour un meilleur accès aux soins et au bien-être des communautés."
} 

export default function Layout({children}:{children: React.ReactNode}){
    return (
        <div>
            {children}
        </div>
    )
}