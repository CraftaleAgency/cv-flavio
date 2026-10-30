import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import SingleColumn from "@/components/single-column";
import s from "./moderno.module.css";

export const metadata: Metadata = { title: "Flavio Biondo — CV · Moderno" };

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function Moderno() {
  return <SingleColumn s={s} options={{ photo: true, stats: true, fontClass: jakarta.variable }} />;
}
