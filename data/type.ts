export interface LightboxDataitem {
    src: string;
    title: string;
    description?: string;
}

export type ImageGroup = {
    group: "terassement"|"à terme"|"construction";
}
export interface GroupTag extends ImageGroup {
    lang:string;
}

export interface LightBoxImage extends LightboxDataitem, ImageGroup {
    id?:number;
}
