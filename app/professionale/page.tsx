import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import SingleColumn from "@/components/single-column";
import s from "./professionale.module.css";

export const metadata: Metadata = { title: "Flavio Biondo — CV · Professionale" };

const plex = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex",
});

export default function Professionale() {
  return <SingleColumn s={s} options={{ photo: true, stats: true, fontClass: plex.variable }} />;
}
