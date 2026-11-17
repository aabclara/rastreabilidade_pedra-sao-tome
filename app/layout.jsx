import "./globals.css";
import { Inter, Instrument_Serif } from "next/font/google";
import Header from "../components/Header";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-serif" });

export const metadata = {
  title: "Pedra São Thomé · Origem rastreável",
  description: "Verifique a procedência da Pedra São Thomé e conheça o caminho do material.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
