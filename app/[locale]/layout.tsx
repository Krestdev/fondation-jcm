import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { config } from "../config";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

const bricolageFont = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
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

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={cn("bg-background antialiased", bricolageFont.variable, manrope.variable)}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
