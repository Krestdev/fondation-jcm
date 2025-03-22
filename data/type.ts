export interface LightboxDataitem {
    src: string;
    title: string;
    description?: string;
}

export type ImageGroup = {
    group: "deforestation"|"vue finale"|"vue actuelle"|"Fondation & Poutre"|"terrassement";
}
export interface GroupTag extends ImageGroup {
    lang:string;
}

export interface LightBoxImage extends LightboxDataitem, ImageGroup {
    id?:number;
}
