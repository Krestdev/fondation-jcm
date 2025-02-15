export interface LightboxDataitem {
    src: string;
    title: string;
    description?: string;
}

export type ImageGroup = {
    group: "terassement"|"à terme"|"en cours";
}

export interface LightBoxImage extends LightboxDataitem, ImageGroup {
    id?:number;
}
