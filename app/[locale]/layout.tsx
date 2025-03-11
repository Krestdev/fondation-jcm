import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { config } from "../config";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Props } from "@/types/types";

const bricolageFont = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export async function generateMetadata(props: Omit<Props, 'children'>): Promise<Metadata> {
  const {locale} = await props.params;
  
  const t = await getTranslations({locale})

  return {
      title: `${t(config.siteName)} - ${t("HomePage.title")}`,
      description: t(config.siteDescription)
  };
}

/* export const metadata: Metadata = {
    title: config.siteName,
    description: config.siteDescription,
  };   */

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={cn("bg-background antialiased", bricolageFont.variable, manrope.variable)}>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}