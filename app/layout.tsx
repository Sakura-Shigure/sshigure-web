import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans, openhuninn } from "@/config/fonts";
import { Providers } from "./providers";
import { Topbar } from "@/components/topbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openhuninn.className} suppressHydrationWarning>
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "custom" }}>
          <div className="relative flex flex-col h-screen">
            <Topbar />
            <main className="container mx-auto max-w-3xl pt-7 px-6 flex-grow">
              {children}
            </main>
            <footer
              className={`w-full flex items-center justify-center py-3 ${fontSans.className}`}
            >
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Sakura Shigure</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
function localFont(arg0: { src: string }) {
  throw new Error("Function not implemented.");
}

