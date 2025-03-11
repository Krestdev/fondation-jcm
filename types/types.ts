import { ReactNode } from "react";

export type Props = {
    children: ReactNode;
    params: Promise<{locale: string}>;
  };

export type PageProps = {
    params: Promise<{locale: string}>;
  };
  

  