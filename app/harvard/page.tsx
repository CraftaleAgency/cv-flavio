import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import SingleColumn from "@/components/single-column";
import s from "./harvard.module.css";

export const metadata: Metadata = { title: "Flavio Biondo — CV · Harvard" };

const garamond = EB_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-garamond",
});

export default function Harvard() {
  return <SingleColumn s={s} options={{ fontClass: garamond.variable }} />;
}
