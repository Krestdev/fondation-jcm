import React from "react";
import { Metadata } from "next";
import { config } from "../../config";
import { Props } from "@/types/types";
import { getTranslations } from "next-intl/server";


export async function generateMetadata(props: Omit<Props, 'children'>): Promise<Metadata> {
    const {locale} = await props.params;
    
    const t = await getTranslations({locale})
  
    return {
        title: `${t("Contact.pageTitle")} - ${t(config.siteName)}`,
        description: t("Contact.seo")
    };
  }  

export default function Layout({children}:{children: React.ReactNode}){
    return (
        <div>
            {children}
        </div>
    )
}