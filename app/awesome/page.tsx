import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import SingleColumn from "@/components/single-column";
import s from "./awesome.module.css";

export const metadata: Metadata = { title: "Flavio Biondo — CV · Awesome" };

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export default function Awesome() {
  return <SingleColumn s={s} options={{ stats: true, splitName: true, fontClass: sourceSans.variable }} />;
}
