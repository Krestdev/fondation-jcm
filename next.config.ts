import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  //output: "export",
  trailingSlash: true
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
