import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import SingleColumn from "@/components/single-column";
import s from "./latex.module.css";

export const metadata: Metadata = { title: "Flavio Biondo — CV · LaTeX" };

const serif = Source_Serif_4({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export default function Latex() {
  return <SingleColumn s={s} options={{ fontClass: serif.variable }} />;
}
