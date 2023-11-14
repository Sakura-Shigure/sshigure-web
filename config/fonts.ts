import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const openhuninn = localFont({
  src: "fonts/jf-openhuninn-2.0.ttf",
  display: "swap",
});
